const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");

/* GET home page. */
router.get('/', csrfProtection,  function(req, res, next) {
  let loggedIn = req.session.auth
  res.render('index',  {loggedIn, token:req.csrfToken() });
});

module.exports = router;
