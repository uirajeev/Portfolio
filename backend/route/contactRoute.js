const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  if (
    name.length === 0 ||
    email.length === 0 ||
    phone.length === 0 ||
    message.length === 0
  ) {
    return res.json({ msg: 'Please fill all the fields' });
    console.log(2);
  }

  let smtpTransporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'rajeevkumar.web@gmail.com',
      pass: process.env.ACCESS_CODE,
    },
  });

  const mailOptions = {
    from: email,
    to: 'rajeevkumar.web@gmail.com',
    subject: `Message from ${name}`,
    html: `
    <h3>Infromation</h3>
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
    </ul>
    <h4>Message</h4>
    <p>${message}</p>
    `,
  };
  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: 'Please fill all the fields' });
      res.status(200).json({ msg: 'Thank you for contacting [].' });
    } catch (error) {
      if (error) return res.status(500).json({ msg: 'There is server error' });
    }
  });
});

module.exports = router;
