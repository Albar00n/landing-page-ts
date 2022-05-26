/* eslint-disable import/no-anonymous-default-export */
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req,res){
try{
 await mail.send({
  from:"noreply@beyin.me",
  to: "mgurshi73@gmail.com",
  subject:`Have new message:${req.body.name}`,
  html:`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Message</title>
  </head>
<body>
<div>
<h3>You've got a new mail from ${req.body.name},<br /> their email is: ✉️${req.body.email} </h3>
<div>
<h3>Phone :${req.body.phone}</h3>
<p>Message:</p>
<p>${req.body.message}</p>
<br>
</div>
</div>
</body>
  `
 })
} catch(error){
  return res.status(error.statusCode || 500).json({error:error.message});
}
return res.status(200).json({error:"ok"})
}
export default sendEmail;

