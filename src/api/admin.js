const router = require('express').Router();
const { sha256 } = require('utility');

router.post('/login', (req, res) => {
  const { password } = req.body;

  if (password && sha256(password) === process.env.CM7_ADMIN_PASSWORD) {
    res.status(200);
    res.end('OK');
    return;
  }

  res.status(401);
  res.end('Unauthorized');
});

module.exports = router;
