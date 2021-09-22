const express = require('express');
const router = express.Router();

const { asyncHandler } = require("./utils");

const db = require("../db/models");
const { Game } = db;

router.get("/", asyncHandler(async (req, res, next) => {
  console.log('You made it to the game shelves page.')
  res.render('game-shelves.pug', { title: `Good Games`});
}));

module.exports = router;
