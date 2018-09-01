const app = require('express')();
const { join } = require('path');
const { Nuxt } = require('nuxt');

// Create a new Nuxt instance
const nuxt = new Nuxt({
  dev: false,
  buildDir: join(__dirname, 'nuxt-dist'),
});

app.use(nuxt.render);

module.exports = app;
