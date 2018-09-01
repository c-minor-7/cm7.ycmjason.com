const { join } = require('path');

module.exports = {
  rootDir: __dirname,
  srcDir: join(__dirname, 'nuxt-src'),
  buildDir: join(__dirname, 'functions/ssr/nuxt-dist'),
  build: {
    publicPath: '/',
    vendor: [],
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
      { name: 'theme-color', content: '#274156' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
    ],
  },
  css: [
    'normalize.css',
    '@/scss/base.scss',
  ],
  plugins: ['@/plugins/global-components.js'],
};
