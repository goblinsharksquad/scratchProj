const express = require('express');
const { createGroup } = require('../controllers/authController');

const router = express.Router();

router.post('/groups');
