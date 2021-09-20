let express = require('express');
let router = express.Router();
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const {loginUser, logoutUser} = require('../auth');
const { csrfProtection, asyncHandler } = require("./utils");

/* GET users listing. */

router.get('/', csrfProtection, (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
