import nodemailer from 'nodemailer';
import { promisify } from 'bluebird';

import { user, pass } from '../config';

/**
 *  @url https://nodemailer.com/smtp/
 */
const poolConfig = {
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use TLS
    auth: {
      user,
      pass
    }
};
const transporter = nodemailer.createTransport(poolConfig);
const verifyPromise = promisify(transporter.verify);

export const verifyConnection = () => {
  return verifyPromise();
};

export const sendMail = (message) => {
  return transporter.sendMail(message);
};
