require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

app.post('/request', require('./request'));

app.all('*', (req, res) => res.redirect('/'));

module.exports = (req, res, next) => app(req, res, next);
