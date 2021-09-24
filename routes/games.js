const express = require('express');
const router = express.Router();

const { requireAuth, loginUser } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

// database access
const db = require("../db/models");
const { Game, Review, User, Game_Shelf, Shelf_Entry } = db;

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
  let userReview = false
  let currentUser = null
  let shelves = [{shelf_name: "No Shelves Exist", id:0}]
  // renders page if game was found
  if (game) {
    // find reviews for current game
    const reviews = await Review.findAll({
      include: User,
    });
    // gets user reviews if a user is logged in
    let hasReview
    let userRating = 0
    if (loggedIn) {
      currentUser = req.session.auth.userId
      userReview = await getUserReview(req.session.auth.userId, req.params.id)
      if (userReview)
        userRating = userReview.rating
      hasReview = userReview !== null
      
      shelves = await Game_Shelf.findAll({
        where: {
          userId: currentUser,
        }
      });
      console.log(shelves)
    }
    res.render('game-page.pug', {
      game,
      reviews,
      shelves,
      userReview,
      userRating,
      currentUser,
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
router.post("/reviews", csrfProtection, asyncHandler(async (req, res, next) => {
  const { review, rating, gameId } = req.body;
  const userReview = await Review.findOne({
    where: {
      userId: req.session.auth.userId,
      gameId
    }
  });
  if (!userReview) {
    // post
    await Review.create({
      rating,
      review,
      spoiler_status:'n', //defaults it to no spoilers (not being used)
      userId: req.session.auth.userId,
      gameId
    });
  } else {
    // update
    await userReview.update({
      review: review,
      rating: rating
    });
  }
  res.redirect(`/games/${gameId}`);
}));

// delete review
router.post("/reviews/delete", csrfProtection, asyncHandler(async (req, res, next) => {
  const { gameId } = req.body;
  const userReview = await Review.findOne({
    where: {
      userId: req.session.auth.userId,
      gameId
    }
  });
  if (userReview) {
    // TODO does not work yet
    userReview.destroy();
    res.redirect(`/games/${gameId}`);
  }
}));

// add a game to a shelf-entry
  // this route will take the selected game and post it to a user's game-shelf
  // via the shelf-entry join table
router.post("/shelf-entry", csrfProtection, asyncHandler(async (req, res, next) => {
  const { gameId, gameShelfId } = req.body;
  // post
  await Shelf_Entry.create({
    gameShelfId,
    gameId,
    play_status: "Unplayed"
  });
  res.redirect("/game-shelves")
}));



module.exports = router;
