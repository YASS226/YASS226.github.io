const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
        user: 'your-email@outlook.com',
        pass: 'your-password'
    }
});

app.post('/send-email', (req, res) => {
    const { email, mobile, msg } = req.body;

    const mailOptions = {
        from: 'your-email@outlook.com',
        to: 'recipient-email@example.com',
        subject: 'New Contact Form Submission',
        text: `Email: ${email}\nMobile: ${mobile}\nMessage: ${msg}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
