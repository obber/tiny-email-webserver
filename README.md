# A Tiny Email Sending Webserver

Send emails from any contact form on your website.

**WARNING:** Utilizing this software requires comfort with setting up NodeJS apps and general dev ops knowledge.

## Getting Started

Copy `config/index.example.js` to `config/index.js` and edit the values to suit your needs.

Start the express server with `npm start`

You'll need to deploy this NodeJS app to a cloud computing platform and make it publicly accessible so you can send it a request from your client side.

## The Problem

I didn't want to use a third party form creator and go through their servers to send myself emails from a contact form on my own website.

Instead, I decided to deploy this tiny email-sending webserver on the cloud and provide my configurations in `config.js`. Now, in my client-side form, I simply have to approve the client-side origin as an approved origin in `config/index.js` and send a POST request to this server and call it a day.

The webserver uses nodemailer and is set up to work with the gmail SMTP protocol. I'd recommend creating a new gmail account for the specific purpose of sending you emails on behalf of your website.

## API

This app runs on `process.env.PORT` or on port 4545 if `PORT` is not defined in the environment.

**POST** to `/contact`

```plaintext
expected body
  name   : STRING
  email  : STRING
  message: STRING
response
  success : BOOLEAN
  error   : STRING
```
