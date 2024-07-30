const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/login', async (req, res) => {
  const { email, password, captchaToken } = req.body;

  const secretKey = 'YOUR_SECRET_KEY';
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

  try {
    const response = await axios.post(verificationUrl);
    if (response.data.success) {
      // Proceed with login
      res.send('Login successful');
    } else {
      res.status(400).send('CAPTCHA verification failed');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
