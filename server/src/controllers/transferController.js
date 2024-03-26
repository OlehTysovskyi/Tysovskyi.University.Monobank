const Card = require("../models/card");
const Transfer = require("../models/transfer");

async function createTransfer(req, res) {
    const { sender_card_num, recipient_card_num, amount } = req.body;
    const current_date = new Date();
  
    try {
      const sender_card = await Card.findOne({
        where: { number: sender_card_num },
      });
      if (!sender_card) {
        return res.status(400).send({ message: "You do not have such card" });
      }
  
      if (sender_card.balance < amount) {
        return res
          .status(400)
          .send({ message: "You do not have enough balance" });
      }
  
      const recipient_card = await Card.findOne({
        where: { number: recipient_card_num },
      });
      if (!recipient_card) {
        return res.status(400).send({ message: "You entered wrong card number" });
      }
  
      const newSenderBalance = parseFloat(sender_card.balance) - parseFloat(amount);
      const newRecipientBalance = parseFloat(recipient_card.balance) + parseFloat(amount);
  
      await sender_card.update({ balance: newSenderBalance });
      await recipient_card.update({ balance: newRecipientBalance });
  
      const transfer = await Transfer.create({
        sender_card_num: sender_card_num,
        recipient_card_num: recipient_card_num,
        amount: amount,
        date: current_date,
      });
  
      res.status(201).json(transfer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error while creating card" });
    }
  }
  

module.exports = {
  createTransfer,
};
