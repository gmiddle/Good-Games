const express = require('express');
const router = express.Router();

const { asyncHandler } = require("./utils");

const db = require("../db/models");
const { Game, Game_Shelf, User } = db;

router.get("/", asyncHandler(async (req, res, next) => {
  console.log('You made it to the game shelves page.')
  const currentUser = await User.findByPk(req.params.id);
  const shelves = await Game_Shelf.findAll()
  res.render('game-shelves.pug', { currentUser, title: `Good Games`});
  
  // if user has shelves created already, GET shelves and display them


}));



// add a shelf
  // GET to get the add a shelf form
  // POST to send it to db

// update shelf
  // GET shelf id form
  // PUT button to submit changes to shelf name

// delete a shelf
  // DELETE to remove shelf id from list of users shelves


// add a game? -> link to redirect games page?


module.exports = router;
