// const nodemailer = require("nodemailer");

// // Llamarla con un email , un mensaje y se envia automaticamente
// export const sendEmail = async (receiverEmail, message) => {
//   try {
//     let testAccount = await nodemailer.createTestAccount();
//     let transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true, // true for 465, false for other ports
//       auth: {
//         user: "humblefoods22@gmail.com", // generated ethereal user
//         pass: "hakgweubzzutpzhd", // generated ethereal password
//       },
//     });
//     let info = await transporter.sendMail({
//       from: '"Portfolio"<humblefoods22@gmail.com>',
//       to: receiverEmail,
//       subject: "Contact Message!",
//       text: message,
//     });
//     //console.log("mensaje enviado", info.messageId)
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };
