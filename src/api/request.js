const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: 'ycmjason.com',
});

const emoji = require('node-emoji');

const createMailHTML = ({ name, email, songLink, content }) => {
  const keyVal = (k, v) => `<p><u>${k}</u><br>${v}</p>`;
  return `Hello,

<p>
Another chord request arrives. Time to arrange!!! 
</p>

<p>
Here is some info about the requester.
</p>

<blockquote>
  ${keyVal('Name', name)}
  ${keyVal('Email', email)}
  ${keyVal('Song Link', songLink)}
  ${keyVal('Content', content)}
</blockquote>

<p>
Wohoo! Do it soon!
</p>

<p>
Love,<br>
Chords ${emoji.get('musical_score')}
</p>`;
};

const createMailData = ({ name, email, songLink, content }) => ({
  from: `${name} <chords-${email.replace('@', '.at.')}@ycmjason.com>`,
  to: 'Chords <chords@ycmjason.com>',
  subject: `${emoji.get('notes')} Chord request`,
  html: createMailHTML({ name, email, songLink, content }),
});

module.exports = (req, res) => {
  mailgun.messages().send(createMailData(req.body), (error, body) => res.json(body));
};
