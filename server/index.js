require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

app.post('/contact', async (req, res) => {
  const { fullName, email, phone, address, message } = req.body;

  if (!fullName || !email || !phone || !address || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const missingEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'].filter((key) => !process.env[key]);
  if (missingEnv.length) {
    console.error('Missing SMTP environment variables:', missingEnv.join(', '));
    return res.status(500).json({ error: 'Server email configuration is incomplete.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.verify();

    const mailOptions = {
      from: `Prime Health Care Pharma <${process.env.SMTP_USER}>`,
      to: 'gamalazzam05@gmail.com',
      subject: `New Contact Request from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\n\nMessage:\n${message}`,
      html: `<h2>New Contact Request</h2><p><strong>Name:</strong> ${fullName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Address:</strong> ${address}</p><p><strong>Message:</strong></p><p>${message}</p>`
    };

    await transporter.sendMail(mailOptions);
    return res.json({ message: 'Message sent successfully. We will contact you soon.' });
  } catch (error) {
    console.error('Contact form email error:', error);
    return res.status(500).json({ error: 'Unable to send message right now. Please verify SMTP credentials and connection.' });
  }
});

app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://primehealthcarepharma.example.com/</loc></url>
    <url><loc>https://primehealthcarepharma.example.com/#about</loc></url>
    <url><loc>https://primehealthcarepharma.example.com/#products</loc></url>
    <url><loc>https://primehealthcarepharma.example.com/#contact</loc></url>
  </urlset>`);
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nAllow: /\nSitemap: https://primehealthcarepharma.example.com/sitemap.xml');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
