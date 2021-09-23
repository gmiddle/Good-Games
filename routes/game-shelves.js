const express = require('express');
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth } = require('../auth');
const { Game, Game_Shelf, User } = db;
const { check, validationResult } = require('express-validator');

const router = express.Router();




router.get("/", requireAuth, asyncHandler(async (req, res, next) => {
  console.log('You made it to the game shelves page.')
  // console.log(Game.id)
  // const currentUser = await db.User.findByPK({ order: [['user_name', 'ASC']] });
  // // const currentUser = await User.findByPk(req.params.id);
  // console.log(currentUser)
  // // const shelves = await Game_Shelf.findAll()
  // res.render('game-shelves.pug', { title: `Good Games`, currentUser });
  
  const { userId } = req.session.auth
  const user = await db.User.findByPk(userId)
  console.log(userId)


  // if user has shelves created already, GET shelves and display them


}));



// add a shelf
  // GET to get the add a shelf form
  // POST to send it to db
router.get('/book-shelves/add', requireAuth, csrfProtection, (req, res) => {
  const book = db.Game_Shelf.build();
  res.render('shelf-add.pug', {
    title: 'Add Shelf',
    book,
    csrfToken: req.csrfToken(),
  });
});

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
