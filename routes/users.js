let express = require('express');
let router = express.Router();
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const {loginUser, logoutUser} = require('../auth');
const { csrfProtection, asyncHandler } = require("./utils");
const db = require('../db/models');

/* GET users listing. */

router.get('/', csrfProtection, (req, res, next) => {
  const user = db.User.build();
  res.render('index', {user, token:req.csrfToken()});
});

// TODO: create log-in form




// Validators
const loginValidators= [
  check('user_name') //log-in with username
    .exists({checkFalsy:true})
    .withMessage('Please provide a valid username'),
  check('password')
    .exists({checkFalsy:true})
    .withMessage('Please enter the correct password')
];



// User Validator

const userValidators = [
  check('user_name')
    .exists({checkFalsy:true})
    .withMessage('Please provide a valid username')
    .isLength({max:30})
    .withMessage('Username must not be more than 30 characters'),
  check('email')
    .exists({checkFalsy:true})
    .withMessage('Please provide a valid email address')
    .isLength({max:255})
    .withMessage('Email must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email address is not a valid email')
    .custom((value)=>{
      return db.User.findOne({where:{email:value}}).then(
        (user)=>{
          if(user){
            return Promise.reject(
              'The provided email address is already in use by another account'
            )
          }
        }
      )
    }),
  check('password')
    .exists({checkFalsy:true})
    .withMessage('Please provide a value for password')
    .isLength({max:50})
    .withMessage('Password must not be more than 50 characters')
    .matches(/^(?=.*[a-z])/, "g")
    .withMessage('Must include at least one lowercase letter')
    .matches(/(?=.*[A-Z])/, 'g')
    .withMessage('Must include at least one uppercase letter')
    .matches(/(?=.*[0-9])/, 'g')
    .withMessage('Must include at least one number 0-9')
    .matches(/(?=.*[!_@#$%^&*])/, 'g')
    .withMessage('Must include at least one special character'), // might need to remove underscore(could cause error?)

  check('confirm-password')
    .exists({checkFalsy:true})
    .withMessage('Please provide a value for confirm password')
    .isLength({max:50})
    .withMessage('Confirm password must not be more than 50 characters')
    .custom((value, {req}) =>{ 
      if(value !== req.body.password){
        throw new Error('Passwords do not match')
      }
      return true
    })
]

router.post('/', csrfProtection, userValidators, asyncHandler(async (req, res) =>{
  const {user_name, email, password} = req.body
  const user = await db.User.build({user_name, email})
  const validatorErrors = validationResult(req)
  if(validatorErrors.isEmpty()){
    const hashedPassword = await bcrypt.hash(password, 10)
    user.password = hashedPassword
    await user.save()
    loginUser(req, res, user)
    res.redirect('/') //TODO: Check to make sure of where we are being redirected
  } else{
    const errors = validatorErrors.array().map((error) => error.msg)
    console.log(errors)
      res.render('index', {
        title:'Sign Up', 
        user,
        errors,
        token:req.csrfToken()

      })
    }
}))

module.exports = router;
