# A Tiny Email Sending Webserver

Send emails from contact forms on ghost blogs.

**WARNING:** Utilizing this software requires comfort with setting up NodeJS apps and general dev ops knowledge.

## The Problem

I didn't want to exactly use a third party form creator and go through their servers to send myself emails from a contact form on my own website.

Instead, I decided to deploy this tiny email-sending webserver on the cloud and provide your configurations in `config.js`, and write a client-side form that sends a POST request to this webserver and call it a day.

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
