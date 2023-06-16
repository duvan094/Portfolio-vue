

exports.handler = async function (event, context) {
    // your server-side functionality
    const sanitizer = require('sanitize')();

    const rawBody = JSON.parse(String(event.body).replace(/'/g, '\'').replace(/\\'/g,"'"))

    const { email, name, message } = sanitizer.primitives(rawBody)

    if(!email || !message || !name) {
        console.log('email or message empty')
        console.log('email', email)
        console.log('name', name)
        console.log('message', message)
        return {
            statusCode: 400,
            // body: JSON.stringify({ message: "Email failed" }),
          };
    }

    const text = `Sender: ${email}. Name: ${name}. Message: ${message}`
    const html = `
                    <h1>Message from ${name}</h1>
                    <h2>Sender:</h2>
                    <p>Name: <b>${name}</b></p>
                    <p>Email: <b>${email}</b></p>
                    <h2>Message:</h2>
                    <p>${message}</p>
                `

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