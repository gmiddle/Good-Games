const express = require('express');
const router = express.Router();

const { requireAuth, loginUser } = require("../auth");
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
  let loggedIn = req.session.auth
  console.log('You made it to the all games page.')
  const games = await Game.findAll()
  res.render('all-games.pug', {games, loggedIn});
}));

// single game route
// /games/id
router.get("/:id(\\d+)", csrfProtection, asyncHandler(async (req, res, next) => {
  let loggedIn = req.session.auth
  console.log('Logged in', loggedIn)

  // finds game by id from route
  const game = await Game.findByPk(req.params.id);
  // defaults
  const userReview = false
  let shelves = [{shelf_name: "No Shelves Exist", id:1}]
  // renders page if game was found
  if (game) {
    // find reviews for current game
    const reviews = await Review.findAll({
      include: User,
    });
    // gets user reviews if a user is logged in
    let hasReview
    if (loggedIn) {
      const userReview = await getUserReview(req.session.auth.userId, req.params.id)
      userName = 
      hasReview = userReview !== null
      console.log('Has review', hasReview)
      // const shelves = await Game_Shelf.findAll(userId, {
      //   where: {
      //     userId,
      //   }
      // });
  
      // PH
    }
    res.render('game-page.pug', {
      game,
      reviews,
      shelves,
      userName,
      userReview,
      loggedIn,
      hasReview,
      token: req.csrfToken(),
    });
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
      gameId
    });
  } else {
    // update
    console.log('Review will be updated.')
    await userReview.update({
      review: review,
      rating: rating
    });
  }
  // res.render('all-games.pug', {games, loggedIn});
  res.redirect(`/games/${gameId}`);
}));

// delete review
router.delete("/reviews", csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
  const userReview = await Review.findOne({
    where: {
      userId,
      gameId
    }
  });
  if (userReview) {
    userReview.destroy();
  }
}));

module.exports = router;
