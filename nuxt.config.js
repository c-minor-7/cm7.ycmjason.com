const { join } = require('path');

module.exports = {
  srcDir: join(__dirname, 'src'),
  serverMiddleware: [
    { path: '/api', handler: join(__dirname, 'src/api/index.js') },
  ],
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'vue-markdown-loader',
      });
    },
  },
  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-113352609-4' }],
  ],
  head: {
    title: 'Cm7 | Chords from Jason',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
    ],
  },
  css: [
    'normalize.css',
    '@/scss/base.scss',
  ],
};
