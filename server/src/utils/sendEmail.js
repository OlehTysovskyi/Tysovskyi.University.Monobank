const nodemailer = require('nodemailer');

// ANTILAB 2: MOVE SENSITIVE DATA TO ENV VARIABLES
const transporter = nodemailer.createTransport({
    service: 'outlook',
    secure: false,
    auth: {
        user: 'mono_sender@outlook.com',
        pass: 'A2s4D6f8',
    },
});

async function sendEmail(recipient_email) {
    try {
        await transporter.sendMail({
            from: 'mono_sender@outlook.com',
            to: recipient_email,
            subject: 'Welcome email',
            text: 'You registered successfully.',
            html: '<p>Congratulations. You have registered to monobank. Hope you will use our website with satisfaction =)</p>',
        });
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

async function sendSupportEmail(req, res) {
    const { problem_text, sender_email } = req.body;

    try {
        // ANTILAB 2: MOVE SENSITIVE DATA TO ENV VARIABLES
        await transporter.sendMail({
            from: 'mono_sender@outlook.com',
            to: 'mono_help_center@outlook.com',
            subject: 'Support Message | Monobank',
            text: problem_text,
            html:
                '<h2>Вітаю) Я' +
                sender_email +
                'стикнувся з такою проблемою:</h2><p>' +
                problem_text +
                '</p><h3>Розраховую на вашу допомогу =)</h3>',
        });

        return res
            .status(200)
            .send({ message: 'Support email has been successfully sended' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res
            .status(400)
            .send({ message: 'Error sending while sending support email' });
    }
}

async function sendSuccessTransactionEmail(recipient_email) {
    try {
        // ANTILAB 2: MOVE SENSITIVE DATA TO ENV VARIABLES
        await transporter.sendMail({
            from: 'mono_sender@outlook.com',
            to: recipient_email,
            subject: 'Incomes email | Monobank',
            text: '',
            html: '<h2>Вітання) На ваш рахунок було надіслано кошти</h2>',
        });
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

module.exports = { sendEmail, sendSupportEmail, sendSuccessTransactionEmail };
