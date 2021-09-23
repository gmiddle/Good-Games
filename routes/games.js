const express = require('express');
const router = express.Router();

const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

// database access
const db = require("../db/models");
const { Game, Review, User, Game_Shelf } = db;

async function getUserReview(userId, gameId) {
    const userReview = await Review.findOne({
      where: {
        userId,
        gameId
      },
      include: User
    });
  return userReview
}

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
  console.log('\n\n')
  console.log(`User "${req.session.auth.userId}" is logged in.`)
  console.log('\n\n')
  // finds game by id from route
  const game = await Game.findByPk(req.params.id);
  // defaults
  const userReview = false
  const shelves = [{shelf_name: "No Shelves Exist", id:1}]
  // renders page if game was found
  if (game) {
    // find reviews for current game
    const reviews = await Review.findAll({
      include: User,
    });
    // gets user reviews if a user is logged in
    let logInUser
    if (req.session.auth.userId) {
      const userReview = await getUserReview(req.session.auth.userId, req.params.id)
      logInUser = userReview.User.user_name
      console.log(userReview)
      // const shelves = await Game_Shelf.findAll(userId, {
      //   where: {
      //     userId,
      //   }
      // });
  
      // PH
      const shelves = [{shelf_name: "Example", id:1}]
    }
    res.render('game-page.pug', {game, shelves, userReview, logInUser, reviews});
  } else {
    // TODO create error in case of non existant game id
    console.log('Game not found')
    // next()
  }
}));

// add review
  // POST to send it to db from the game-page
router.post("/reviews", csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
  console.log('You made it to the all games page.')
  const { review, rating, userId, gameId } = req.body;
  const userReview = await Review.findOne({
    where: {
      userId,
      gameId
    }
  });
  if (!userReview) {
    // post
    console.log('New Review will be created.')
    const newReview = await Review.create({
      rating,
      review,
      spoiler_status:'n', //defaults it to no spoilers (not being used)
      userId: req.session.auth.userId,
      gameId,
      token: req.csrfToken()
    });
  } else {
    // update
    console.log('Review will be updated.')
    await userReview.update({
      review: review,
      rating: rating,
      token: req.csrfToken()
    });
  }
  res.redirect(`/games/${gameId}`);
}));

// delete review
router.delete("/reviews", csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
  const userReview = await Review.findOne({
    where: {
      userId,
      gameId,
      token: req.csrfToken()
    }
  });
  if (userReview) {
    userReview.destroy();
  }
}));

module.exports = router;
