const express = require ('express');
const {registerValidation, loginValidation} = require ('../utils/validators/userValidator');
const {registerUser, loginUser} = require ('../utils/validators/userController');

const router = express.router();

router.post('/register'), registerValidation,registerUser;
router.post('/login'), loginValidation,loginUser;