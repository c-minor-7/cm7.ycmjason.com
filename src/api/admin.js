const router = require('express').Router();
const db = require('./db');

router.use(require('./middlewares/ensureAdmin'));

router.post('/auth', (req, res) => {
  res.status(200);
  res.end('OK');
});

router.post('/songs', async (req, res, next) => {
  const { name, artist, youtubeLink, originalKey, cm7Src } = req.body;
  const song = await db.songs.insertOne({ name, artist, youtubeLink, originalKey, cm7Src }).catch(next);
  res.json(song);
});

module.exports = router;
