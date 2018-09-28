#!/usr/bin/env node
const { join } = require('path');
const { copySync } = require('fs-extra');

const nuxtDist = require('../nuxt.config.js').buildDir;
const ssrDir = join(__dirname, '../functions/ssr');

copySync(nuxtDist, join(ssrDir, 'nuxt-dist'));
