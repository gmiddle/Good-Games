const express = require('express');
const router = express.Router();

const { asyncHandler } = require("./utils");

const db = require("../db/models");
const { Game, Game_Shelf, User } = db;

router.get("/", asyncHandler(async (req, res, next) => {
  console.log('You made it to the game shelves page.')
  const currentUser = await User.findByPk(1);
  const shelves = await Game_Shelf.findAll()
  res.render('game-shelves.pug', { currentUser, title: `Good Games`});
}));

module.exports = router;
