const express = require('express');
const router = express.Router();

const { asyncHandler } = require("./utils");

const db = require("../db/models");
const { Game } = db;

router.get("/", asyncHandler(async (req, res, next) => {
  console.log('You made it to the all games page.')
  res.render('all-games.pug', { title: `Good Games`});
}));

module.exports = router;
