const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');  // Import the 'path' module

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/fonts', express.static(path.join(__dirname, 'public/fonts'), { type: 'font/woff2' }));

// Serve static files (CSS, JavaScript, etc.)
app.use(express.static(path.join(__dirname, 'public')));


// Your Nodemailer configuration using your email credentials
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'gamershubx902@gmail.com', // replace with your ProtonMail address
        pass: 'mwkx sksl egtl xtdi'             // replace with your ProtonMail password
    },
    // Increase the timeout (in milliseconds)
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
});

// Handle form submissions
app.post('/submit', (req, res) => {
    const { name, nickname, email, message, service } = req.body;

    const mailOptions = {
        from: email,  // use the user's email as the sender
        to: 'okemkaasomugha@gmail.com' ,  // replace with the destination email
        subject: 'New Form Submission',
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

// Serve the HTML file
app.get('/test.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

 