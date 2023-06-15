

exports.handler = async function (event, context) {
    // your server-side functionality

    const rawBody = String(event.body).replace(/'/g, '\'').replace(/\\'/g,"'")

    const email = rawBody.email
    const message = rawBody.message

    if(!email || !message) {
        return {
            statusCode: 400,
            // body: JSON.stringify({ message: "Email failed" }),
          };
    }

    const text = `Sender: ${email}. Message: ${message}`
    const html = `<strong>Sender:</strong> ${email}. <strong>Message:</strong></br>${message}`

    const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail.setApiKey(process.env.NETLIFY_EMAILS_PROVIDER_API_KEY)

    const msg = {
      to: process.env.SEND_GRID_RECIPENT, // Change to your recipient
      from: process.env.SEND_GRID_VERIFIED_SENDER, // Change to your verified sender
      subject: 'Message from Hello@jacobduvander.se',
      text,
      html
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
        // body: JSON.stringify({ message: "Sending email!" }),
      };
  };