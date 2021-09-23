const express = require('express');
const router = express.Router();

// auth and security
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth } = require("../auth");

// database access
const db = require("../db/models");
const { Game, Review, User, Game_Shelf } = db;

let findUserReview = async function (userId, gameId) {
  const userReview = await Review.findOne({
    where: {
      userId,
      gameId
    },
    include: User
  });
  console.log(userReview.rating)
  console.log(userReview.User.user_name)
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
  const gameId = req.params.id;
  console.log(`You made it to the game page with an ID of ${gameId}`)
  // finds game by id
  const game = await Game.findByPk(gameId);
  if (game) {
    // renders page if game was found
    const userId = 2
    const userReview = findUserReview(userId, gameId)
    const reviews = await Review.findAll({
      include: User,
    });

    const shelves = await Game_Shelf.findAll();

    res.render('game-page.pug', {game, shelves, userReview, reviews});
  } else {
    // TODO create error in case of non existant game id
    console.log('Game not found')
    // next()
  }
}));

// add review
  // POST to send it to db from the game-page
router.post("/reviews", requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  console.log('You made it to the all games page.')
  const { review, rating, userId, gameId } = req.body;
  const userReview = findUserReview(userId, gameId)
  if (!userReview) {
    // post
    console.log('New Review will be created.')
    const newReview = await Review.create({
      rating,
      review,
      spoiler_status:'n', //defaults it to no spoilers (not being used)
      userId,
      // userId: res.locals.User.id,
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
  // res.redirect(`/games/${gameId}`);
}));

// delete review
router.delete("/reviews", requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  const userReview = findUserReview(userId, gameId)
  if (userReview) {
    userReview.destroy();
    // TODO use DOM manip to delete review
  }
}));

module.exports = router;
