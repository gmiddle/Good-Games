const express = require('express');
const router = express.Router();

const { asyncHandler } = require("./utils");

const db = require("../db/models");
const { Game } = db;

// all-games page route
// /games
router.get("/", asyncHandler(async (req, res, next) => {
  console.log('You made it to the all games page.')
  const games = await Game.findAll()
  res.render('all-games.pug', {games, title: `Good Games`});
}));

// single game route
// /games/id
router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
  const gameId = req.params.id;
  console.log(`You made it to the game page with an ID of ${gameId}`)
  // finds game by id
  const game = await Game.findByPk(gameId);
  if (game) {
    console.log(game.game_img)
    // renders page if game was found
    const gameName = game.name
    res.render('game-page.pug', {game, title: `Good Games - ${gameName}`});
  } else {
    // TODO create error in case of non existant game id
    console.log('Game not found')
    // next()
  }
}));

module.exports = router;
