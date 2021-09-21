var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/game/:id', function(req, res, next) {
  const gameId = 1
  const gameName = ''
  res.render('game', { title: `Good Games - ${gameName}`});
});

module.exports = router;
