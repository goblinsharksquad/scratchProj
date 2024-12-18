// the files in the routes folder will define the API endpoints, and map them to the corresponding controller middleware

const express = require('express');
const { registerUser, userLogin } = require('../controllers/authController');

// creates new router instance
const router = express.Router();

// Register Route
router.post('/register', registerUser, (req, res) => {
  res.status(201).json({
    message: 'User registered successfully',
    user: res.locals.user,
  });
});

// Login Route
router.post('/login', userLogin, (req, res) => {
  res.status(200).json({
    message: 'Login Successful',
    user: res.locals.user,
  });
});

module.exports = router;
