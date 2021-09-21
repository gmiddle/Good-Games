let express = require("express");
let router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { loginUser, logoutUser } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");

/* GET users listing. */

// TODO: create log-in form

// Validators
const loginValidators = [
  check("user_name") //log-in with username
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid username"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please enter the correct password"),
];

// User Validator

const userValidators = [
  check("user_name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid username")
    .isLength({ max: 30 })
    .withMessage("Username must not be more than 30 characters")
    .custom((value) => {
      //TODO: Copy logic to user_name check
      return db.User.findOne({ where: { user_name: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided username is already in use by another account"
          );
        }
      });
    }),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid email address")
    .isLength({ max: 255 })
    .withMessage("Email must not be more than 255 characters long")
    .isEmail()
    .withMessage("Email address is not a valid email")
    .custom((value) => {
      //TODO: Copy logic to user_name check
      return db.User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided email address is already in use by another account"
          );
        }
      });
    }),

  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for password")
    .isLength({ max: 50 })
    .withMessage("Password must not be more than 50 characters")
    .matches(/^(?=.*[a-z])/, "g")
    .withMessage("Must include at least one lowercase letter")
    .matches(/(?=.*[A-Z])/, "g")
    .withMessage("Must include at least one uppercase letter")
    .matches(/(?=.*[0-9])/, "g")
    .withMessage("Must include at least one number 0-9")
    .matches(/(?=.*[!_@#$%^&*])/, "g")
    .withMessage("Must include at least one special character"), // might need to remove underscore(could cause error?)

  check("confirm-password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for confirm password")
    .isLength({ max: 50 })
    .withMessage("Confirm password must not be more than 50 characters")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
];

router.post(
  "/",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res) => {
    const { user_name, email, password } = req.body;
    console.log(req.body);
    const user = await db.User.build({ user_name, email });
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect("/users"); //TODO: Check to make sure of where we are being redirected
      // console.log("testing the redirect")
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      console.log(errors);
      res.render("index", {
        title: "Sign Up",
        user,
        errors,
        token: req.csrfToken(),
      });
    }
  })
);

router.get("/", (req, res, next) => {
  res.render("user.pug");
});

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { user_name, password } = req.body;
    console.log(req.body);

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { user_name } });
      console.log(user);
      if (user !== null) {
        console.log("user is not null!!!!!!!!!");
        const passwordMatch = await bcrypt.compare(
          password,
          user.password.toString()
        );

        if (passwordMatch) {
          loginUser(req, res, user);
          return res.redirect("/");
        }
      }
      errors.push("Login failed for the provided username and password");
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render("login.pug", {
      user_name,
      errors,
      token: req.csrfToken(),
    });
  })
);

router.get(
  "/login",
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    res.render("login.pug", { token: req.csrfToken() });
  })
);

router.post('/logout', (req,res) => {
  logoutUser(req, res);
  res.redirect('/')//TODO redirect to home page after logout. //TODO still need to add form in pug
});


module.exports = router;
