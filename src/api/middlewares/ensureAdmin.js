const { sha256 } = require('utility');

module.exports = (req, res, next) => {
  const password = req.get('X-ADMIN-AUTH');

  if (!password || sha256(password) !== process.env.CM7_ADMIN_PASSWORD) {
    res.status(401);
    res.end('Unauthorized');
    return;
  }

  next();
};
