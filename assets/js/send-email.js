
"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "jefferson.b.guanzing@gmail.com",
    pass: "@JohnWick05"
  }
});

var mailOptions = {
    from: 'jefferson.b.guanzing@gmail.com',
    to: 'jbguansing05@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hi Im Jefferson',
    text: 'lorem asjdkasjd'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Sent Email')
    }
})