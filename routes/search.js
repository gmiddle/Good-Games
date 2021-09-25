const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

const { asyncHandler } = require("./utils");

// database access
const db = require("../db/models");
const { Game } = db;

// search all games route
// /search
router.get("/", asyncHandler(async (req, res, next) => {
  let loggedIn = req.session.auth
  games = await Game.findAll()
  res.render('search_results.pug', {games, loggedIn});
}));

router.post("/entry", asyncHandler(async (req, res, next) => {
  const { search } = req.body;
    console.log('\n\n\n')
    let loggedIn = req.session.auth
    let games
    if (search !== undefined) {
      console.log('Starting search for', search)
      games = await Game.findAll({
        where:{
          name:{
            [Op.iLike]: `%${search}%`
          }
        }
      })
    console.log(games)
    } else {
      games = await Game.findAll()
    }
    console.log(games)
    res.render('search_results.pug', {games, loggedIn});
}));

module.exports = router;
