

exports.handler = async function (event, context) {
    // your server-side functionality

    const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail.setApiKey(process.env.NETLIFY_EMAILS_PROVIDER_API_KEY)

    const msg = {
      to: 'jacobduvander@gmail.com', // Change to your recipient
      from: 'hello@jacobduvander.se', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    await sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.log('something happended')
        console.error(error)
      })


    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Sending email!" }),
      };
  };