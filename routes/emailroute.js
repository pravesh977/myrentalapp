const express = require('express');
const myrouter = express.Router();
require('dotenv').config();
const nodemailer = require('nodemailer');

var smtpTransport = require('nodemailer-smtp-transport');

//

    // // create reusable transporter object using the default SMTP transport
    

//reference url https://medium.com/@manojsinghnegi/sending-an-email-using-nodemailer-gmail-7cfa0712a799

    //

myrouter.post('/', (req, res)=>{

    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        // host: 'smtp.gmail.com',
        // port: 465,
        // secure: false,
        auth: {
            user: 'praveshtesting@gmail.com',
            pass: process.env.emailpass,
        },
        tls:{
            rejectUnauthorized:false
        }
    }));

    let mailOptions = {
        from: req.body.emailid, // sender address
        to: 'praveshtesting@gmail.com', // list of receivers
        subject: req.body.emailsubject, // Subject line
        html: `<p>Email Address: ${req.body.emailid}</p> <br>${req.body.emailmessage}`, // plain text body
        //html: '<b>Hello world?</b>' // html body
    };

    // // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

    console.log("hey email");
    console.log(req.body);
    emailid: req.body.emailid
});

module.exports = myrouter;