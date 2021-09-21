const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");

/* GET home page. */
router.get('/', csrfProtection,  function(req, res, next) {
  res.render('index',  { title: 'a/A Express Skeleton Home', token:req.csrfToken() });
});

module.exports = router;
