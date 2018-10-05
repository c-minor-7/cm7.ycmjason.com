const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/request', require('./request'));

app.use('/api/admin', require('./admin'));

app.all('*', (req, res) => {
  res.status(404);
  res.send('404 Not FOUNNNNNNNNND');
  console.error(req.originalUrl);
});

module.exports = (req, res, next) => app(req, res, next);
