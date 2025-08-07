const nodemailer = require("nodemailer");

const sendMail=async(req,res)=>{
    let testAccount =await nodemailer.createTestAccount();


    //connect with the SMTP
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "jarrell.rippin64@ethereal.email",
    pass: "5YP9nUM1bv6H6qfjNW",
    },
})
let info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
})
console.log("Message sent: %s", info.messageId);
res.json(info);
}
module.exports=sendMail;