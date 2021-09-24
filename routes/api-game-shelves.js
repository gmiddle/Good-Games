const express = require("express");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth } = require("../auth");
const { Game, Game_Shelf, User } = db;
const { check, validationResult } = require("express-validator");


const router = express.Router();

// game-shelves page route
// what do we need to know?
// the ID of the logged in user
// what game-shelves belong to them
router.get(
  "/",
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    // const userId = req.session.auth.userId
    const shelf = await Game_Shelf.findAll()
    res.json(shelf);
  })
);

// // add a shelf
//   // GET to get the add a shelf form
// 'Add A New Shelf' button
// when clicked, new div appears as a text box...
// as user starts typing, a submit button appears
//   // POST to send it to db
// TODO: verify if we need requireAuth and csrfProtection as middleware


const shelfValidators = [
  check("shelf_name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Title")
    .isLength({ max: 30 })
    .withMessage("Shelf Name must not be more than 30 characters long"),
];

// update shelf
// GET shelf id form
// PUT button to submit changes to shelf name

const checkPermissions = (game_shelf, currentUser) => {
  if (game_shelf.userId !== currentUser.id) {
    const err = new Error("Illegal operation.");
    err.status = 403; // Forbidden
    throw err;
  }
};



// delete a shelf
// DELETE to remove shelf id from list of users shelves

// add a game? -> link to redirect games page?


//set up api route for fetch in event listener
// check to add json object


module.exports = router;
