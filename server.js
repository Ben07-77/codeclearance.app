const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');  // Import the 'path' module

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/fonts', express.static(path.join(__dirname, 'public/fonts'), { type: 'font/woff2' }));

app.use(express.static(path.join(__dirname, 'public')));


// Nodemailer configuration with email credentials
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'gamershubx902@gmail.com',
        pass: 'xfgl bbaj kclq ftqv'
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
});

// Handle form submissions
app.post('/submit', (req, res) => {
    const {  name, nickname, email, message, service } = req.body;

    const mailOptions = {
        from: email,
        to: 'rm419033@gmail.com' ,  //destination email
        subject: 'Code clearance application',
        text: `Name: ${name}\nEmail: ${email}\nNickname:${nickname}\nService:${service}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Error sending email' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Form submitted successfully' });
    });
});


app.get('/test.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/success.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'success.html'));
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

 
