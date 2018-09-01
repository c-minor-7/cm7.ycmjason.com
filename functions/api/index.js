const express = require('express');
const app = express();

app.use(express.json());

app.post('/request', require('./request'));

app.use('/admin', require('./admin'));

app.all('*', (req, res) => {
  res.status(404);
  res.send('404 Not FOUNNNNNNNNND');
});

module.exports = (req, res, next) => app(req, res, next);
