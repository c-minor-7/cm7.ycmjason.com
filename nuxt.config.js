const { join } = require('path');

module.exports = {
  srcDir: join(__dirname, 'src'),
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'vue-markdown-loader',
      });
    },
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  css: [
    'normalize.css',
    '@/scss/base.scss',
  ],
};
