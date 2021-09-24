const express = require("express");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth } = require("../auth");
const { Game, Game_Shelf, User } = db;
const { check, validationResult } = require("express-validator");

const router = express.Router();


const checkPermissions = (game_shelf, currentUser) => {
  if (game_shelf.userId !== currentUser.id) {
    const err = new Error("Illegal operation.");
    err.status = 403; // Forbidden
    throw err;
  }
};


router.get(
  "/",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    // const userId = req.session.auth.userId
    let userId = req.session.auth;
    const shelf = await Game_Shelf.findAll({
      where: userId,
      include: Shelf_Entry
    });
    for(item of shelf){
      console.log(item.Shelf_Entry.gameId)
    }
    res.json(shelf);
  })
);


const shelfValidators = [
  check("shelf_name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Shelf Name")
    .isLength({ max: 30 })
    .withMessage("Shelf Name must not be more than 30 characters long"),
];




router.post(
  "/",
  shelfValidators,
  asyncHandler(async (req, res) => {
    let loggedIn = req.session.auth;

    const userId = req.session.auth.userId;

      const  { shelf_name } = req.body;

      const gameShelf = await Game_Shelf.create({ shelf_name, userId });
      console.log( "------------- GAME-SHELVES POST ROUTE WAS HIT ---------------");

    // TODO: if/else to validate if shelf name already exists for this user

    res.json(gameShelf);
  })
);



module.exports = router;
