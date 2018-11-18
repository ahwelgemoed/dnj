const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const poems = require('./routes/api/poems');
const path = require('path');
const nodemailer = require('nodemailer');

//Initialize Express
const app = express();

// BodyParser MiddelWare
app.use(bodyParser.json());

//Import MongoURI from Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected to MLAB...'))
  .catch(err => console.log(err));

//  Routes
app.use('/api/poems', poems);
app.post('/api/send', (req, res) => {
  console.log(req.body);
  const output = `
  <h3>New REPORT</h3>
  <h4>${req.body.name}</h4>
  from <h4>${req.body.handle}</h4>
  <p>${req.body.body}</p>

  `;
  let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'arno.welgemoed@outlook.com', // generated ethereal user
      pass: 'Franswelgemoed..09' // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
      ciphers: 'SSLv3'
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: 'arno.welgemoed@outlook.com', // sender address
    to: 'arno.welgemoed@outlook.com', // list of receivers
    subject: '🔥 Dis Net Jy Report 🔥', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});

// Serve static assets if in Production

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on Port: ${port}`));
