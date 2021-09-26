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

router.delete("/", asyncHandler(async (req, res, next) => {
  console.log("THIS POST WAS HITTTTTTTT")
  let loggedIn = req.session.auth;
  // console.log("----------------You made it to the game shelves page.----------------");
  let userId = req.session.auth;
  // console.log("--------this is the userId", userId);
  // const gameShelves findsAll game shelves that are owned by a specific user
  const {shelfId} = req.body

  console.log(shelfId)
  const gameShelves = await Game_Shelf.findByPk()
  gameShelves.destroy()
  // res.json(gameShelves)
}))



module.exports = router;
