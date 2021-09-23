const express = require('express');
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth } = require('../auth');
const { Game, Game_Shelf, User } = db;
const { check, validationResult } = require('express-validator');

const router = express.Router();

// game-shelves page route
// what do we need to know?
  // the ID of the logged in user
  // what game-shelves belong to them
router.get("/", csrfProtection, asyncHandler(async (req, res, next) => {
  console.log('----------------You made it to the game shelves page.----------------')
  // TODO: will need to figure out how to get current logged in user ID and remove hardcoded user below
  userId = 1;
  // const gameShelves findsAll game shelves that are owned by a specific user
  const gameShelves = await Game_Shelf.findAll({
    where: { userId, }
  })
  console.log(gameShelves);
  res.render('game-shelves.pug', {gameShelves, title: `Good Games`});
}));


// // add a shelf
//   // GET to get the add a shelf form
      // 'Add A New Shelf' button
        // when clicked, new div appears as a text box...
          // as user starts typing, a submit button appears
//   // POST to send it to db
// TODO: verify if we need requireAuth as middleware
router.post('/', csrfProtection, asyncHandler( async(req, res) => {
  const { shelf_name } = req.body;
  const gameShelf = await Game_Shelf.create({ shelf_name });
  console.log(">>>>>>> NEW GAME SHELF WAS CREATED!!!! THIS IS A GAME SHELF", gameShelf);
  // res.render('shelf-add.pug', {
  //   title: 'Add Shelf',
  //   gameShelf,
  //   csrfToken: req.csrfToken(),
  // });
  res.redirect(`/games-shelves`);
}));

const shelfValidators = [
  check('shelf_name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Title')
    .isLength({ max: 30 })
    .withMessage('Shelf Name must not be more than 30 characters long'),
];

// update shelf
  // GET shelf id form
  // PUT button to submit changes to shelf name

// delete a shelf
  // DELETE to remove shelf id from list of users shelves


// add a game? -> link to redirect games page?


module.exports = router;
