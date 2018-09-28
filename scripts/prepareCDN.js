const { join, basename, relative } = require('path');
const {
  readdirSync,
  copyFileSync,
  removeSync,
  mkdirSync,
  existsSync,
} = require('fs-extra');
const flatmap = (xs, fn) => xs.map(fn).reduce((acc, ys) => [...acc, ...ys], []);
const relativeFromCWD = (path) => relative(process.cwd(), path);

const cdnSrcDirs = [
  join(require('../nuxt.config.js').srcDir, 'static'),
  join(require('../nuxt.config.js').buildDir, 'dist/client'),
];
const cdnDistDir = join(__dirname, '../public-dist');

console.log(`Cleaning ${relativeFromCWD(cdnDistDir)}...`);
removeSync(cdnDistDir);
mkdirSync(cdnDistDir);

flatmap(cdnSrcDirs, dir => {
  return readdirSync(dir).map(filename => join(dir, filename));
}).forEach(filepath => {
  const filename = basename(filepath);
  const toFilepath = join(cdnDistDir, filename);
  console.log(`${relativeFromCWD(filepath)} -> ${relativeFromCWD(toFilepath)}`);
  copyFileSync(filepath, toFilepath);
});
