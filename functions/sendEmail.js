const createTransporter = require("./utils/emailClient");

exports.handler = async event => {
  const eventBody = JSON.parse(event.body);
  if (event.httpMethod === 'POST' && eventBody.key === process.env.FAUNA_SERVER_SECRET) {
    try {
      const mailOptions = {
        from: process.env.EMAIL_ADDRESS_ALIAS,
        to: eventBody.to,
        subject: eventBody.subject,
        text: eventBody.text,
        html: eventBody.html
      };
      let emailTransport = await createTransporter();
      await emailTransport.sendMail(mailOptions);
      return {
        statusCode: 200
        // body: JSON.stringify(info)
      };
    } catch (e) {
      console.log(e)
      return {
        statusCode: 500
        // body: JSON.stringify(e)
      };
    }
  } else {
    return {
      statusCode: 500,
      body: "Invalid request"
    };
  }
};