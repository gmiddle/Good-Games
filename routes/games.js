const express = require('express');
const router = express.Router();

const { asyncHandler } = require("./utils");

const db = require("../db/models");
const { Game } = db;

router.get("/", asyncHandler(async (req, res, next) => {
  console.log('You made it to the all games page.')
  const games = await Game.findAll()
  res.render('all-games.pug', {games, title: `Good Games`});
}));

router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
  const gameId = req.params.id;
  // below code is temp only
  // res.render('game-page.pug', { title: `Good Games - Game ID: ${gameId}`});
  console.log(`You made it to the game page with an ID of ${gameId}`)

  const game = await Game.findByPk(gameId);
  console.log('\nGame Data', game, '\n')
  if (game) {
    const gameName = game.name
    // console.log(gameName)
    res.render('game-page.pug', { title: `Good Games - ${gameName}`});
  } else {
    console.log('Game not found')
  }
}));

module.exports = router;
