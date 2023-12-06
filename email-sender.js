const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ade4laju@gmail.com',
    pass: 'llyk kkcl lnwa mtwk',
  },
});

const mailOptions = {
  from: 'ade4laju@gmail.com',
  to: 'devojukwu@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js using nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});