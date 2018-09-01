const functions = require('firebase-functions');

exports.api = functions.https.onRequest(require('./api'));
exports.ssr = functions.https.onRequest(require('./ssr'));
