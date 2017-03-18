import { user, receiver, subject } from '../config';
import { sendMail, verifyConnection } from './mailer';
import { verifyBody, verifyOrigin } from './utils';

const messageTemplate = {
  from: user,
  to: receiver,
  subject: subject
};

export const postContact = async (req, res) => {
  if (!verifyOrigin(req.headers.origin)) {
    console.log('invaid origin.');
    console.log('request = ', req.headers.origin);
    res.status(500);
    return res.json({
      success: false,
      error: `Invalid origin: ${req.headers.origin}`
    });
  }

  try {
    const { name, email, message } = req.body;
    if (!verifyBody([name, email, message])) {
      console.log('invalid body. req.body = ', req.body);
      res.status(500);
      return res.json({
        success: false,
        error: 'validation errors. be sure to attach a name, email, and message to JSON body'
      });
    }
    let toSend = {
      text: `
        contact info: ${name} <${email}>
        message body: ${message}
      `,
      html: `
        <p>contact info: ${name} <${email}></p>
        <p>message body: ${message}</p>
      `
    };
    const resp = await sendMail(Object.assign(toSend, messageTemplate));
    if (resp.accepted.length) {
      res.json({
        success: true
      });
    } else {
      res.status(500);
      res.json({
        success: false,
        error: 'mail was rejected'
      });
    }
  } catch (e) {
    console.log('error in controller. e = ', e);
    res.status(500);
    res.json({
      success: false,
      error: e.toString()
    });
  }
};
