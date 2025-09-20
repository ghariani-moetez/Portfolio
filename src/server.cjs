const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({  service: 'gmail',
  auth: {
    user: 'gharianimoetez72@gmail.com',
    pass: 'suly evlc jpfv kcwq'
  }
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'gharianimoetez72@gmail.com',
    subject: `New Contact from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

app.listen(5000, () => {
  console.log('🚀 Server started on http://localhost:5000');
});