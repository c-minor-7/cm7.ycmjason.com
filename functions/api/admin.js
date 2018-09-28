/* eslint-disable */
const router = require('express').Router();

router.post('/songs', async (req, res, next) => {
  // TODO: create song
  const { name, artist, youtubeLink, originalKey, cm7Src } = req.body;
  /*
  const song = await db.songs.insertOne({ name, artist, youtubeLink, originalKey, cm7Src }).catch(next);
  */
  res.json(song);
});

module.exports = router;
