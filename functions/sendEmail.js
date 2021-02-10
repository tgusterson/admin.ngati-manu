const transporter = require("./utils/emailClient");

exports.handler = async event => {
  if (event.httpMethod === 'POST') {
    try {
      const eventBody = JSON.parse(event.body);
      const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: eventBody.to,
        subject: eventBody.subject,
        text: eventBody.text
        // , html: "<p>HTML version of the message</p>"
      };
      let info = await transporter.sendMail(mailOptions);
      console.log(info)
      return {
        statusCode: 200,
        body: JSON.stringify(info)
      };
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify(e)
      };
    }
  } else {
    return {
      statusCode: 500,
      body: "Invalid request"
    };
  }
};

// exports.handler = async event => {
//   if (event.httpMethod === 'POST') {
//     const eventBody = JSON.parse(event.body);
//     const mailOptions = {
//       from: process.env.EMAIL_ADDRESS,
//       to: eventBody.to,
//       subject: eventBody.subject,
//       text: eventBody.text
//       // , html: "<p>HTML version of the message</p>"
//     };
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         return {
//           statusCode: 500,
//           body: "Error sending email"
//         };
//       }
//     });
//     return {
//       statusCode: 250,
//       body: "Email sent"
//     };
//   } else {
//     return {
//       statusCode: 500,
//       body: "Invalid request"
//     };
//   }
// }