const router = require('express-promise-router')();
const config = require('firebase-functions').config();
const admin = require('firebase-admin');
admin.initializeApp();

const isProd = process.env.NODE_ENV === 'production' && config.env === 'production';

const NOTIFY_EMAIL = (() => {
  if (isProd) return 'cm7@ycmjason.com';
  return 'cm7-test@ycmjason.com';
})();
const mailgun = require('mailgun-js')({
  apiKey: config.mailgun.key,
  domain: config.mailgun.domain,
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
  ${keyVal('Content', content.replace(/\n/g, '<br>'))}
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
  to: `Cm7 <${NOTIFY_EMAIL}>`,
  subject: `${emoji.get('notes')} Chord request`,
  html: createMailHTML({ name, email, songLink, content }),
});


router.post('/', async (req, res) => {
  try {
    const body = await mailgun.messages().send(createMailData(req.body));
    res.json(body);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

module.exports = router;
