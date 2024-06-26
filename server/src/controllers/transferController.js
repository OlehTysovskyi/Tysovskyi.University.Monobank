const Transfer = require('../models/transfer');
const Card = require('../models/card');
const { Op } = require('sequelize');
const { getUserByCardNum } = require('../controllers/cardController');
const { sendSuccessTransferEmail } = require('../utils/sendEmail');

// TODO: Remove unnecessary console.log
async function createTransfer(req, res) {
    const { sender_card_num, recipient_card_num, amount } = req.body;
    const current_date = new Date();

    try {
        const sender_card = await Card.findOne({
            where: { number: sender_card_num },
        });
        if (!sender_card) {
            return res
                .status(400)
                .send({ message: 'You do not have such card' });
        }

        if (sender_card.balance < amount) {
            return res
                .status(400)
                .send({ message: 'You do not have enough balance' });
        }

        const recipient_card = await Card.findOne({
            where: { number: recipient_card_num },
        });
        if (!recipient_card) {
            return res
                .status(400)
                .send({ message: 'You entered wrong card number' });
        }

        const newSenderBalance =
            parseFloat(sender_card.balance) - parseFloat(amount);
        const newRecipientBalance =
            parseFloat(recipient_card.balance) + parseFloat(amount);

        await sender_card.update({ balance: newSenderBalance });
        await recipient_card.update({ balance: newRecipientBalance });

        const transfer = await Transfer.create({
            sender_card_num: sender_card_num,
            recipient_card_num: recipient_card_num,
            amount: amount,
            date: current_date,
        });

        const user = await getUserByCardNum(recipient_card_num);
        const recipient_email = user.email;
        console.log(recipient_email);
        sendSuccessTransferEmail(recipient_email);

        res.status(201).json(transfer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while creating card' });
    }
}

const getUserTransfers = async (req, res) => {
    const user_id = req.params.userId;

    try {
        const cards = await Card.getUserCards(user_id);
        const cardNumbers = cards.map((card) => card.number);

        const transfers = await Transfer.findAll({
            where: {
                [Op.or]: [
                    { sender_card_num: { [Op.in]: cardNumbers } },
                    { recipient_card_num: { [Op.in]: cardNumbers } },
                ],
            },
            order: [['createdAt', 'DESC']],
        });

        // TODO: Move sorting algorithm in utility folder or create a separate functions
        const transfersWithOperationTypeAndUsername = await Promise.all(
            transfers.map(async (transfer) => {
                const isSenderCard = cardNumbers.includes(
                    transfer.sender_card_num
                );
                const type = isSenderCard ? 'OUTGOING' : 'INCOMING';
                let username = '';

                if (type === 'OUTGOING') {
                    const recipient_user = await getUserByCardNum(
                        transfer.recipient_card_num
                    );
                    username = recipient_user.username;
                } else if (type === 'INCOMING') {
                    const sender_user = await getUserByCardNum(
                        transfer.sender_card_num
                    );
                    username = sender_user.username;
                }

                return { ...transfer.toJSON(), type, username };
            })
        );

        res.status(200).send({
            transfers: transfersWithOperationTypeAndUsername,
        });
    } catch (error) {
        console.error('Error while fetching user transfers:', error);
        res.status(500).json({ error: 'Error while fetching user transfers' });
    }
};

module.exports = {
    createTransfer,
    getUserTransfers,
};
