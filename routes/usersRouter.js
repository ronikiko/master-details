var express = require('express');
var router = express.Router();
const { getUsers, getUser } = require('../controllers/usersController')
const protectRouter = require('../config/protectedRouter')

/* GET users listing. */
router.get('/users', protectRouter, getUsers);

// Get single user
router.get('/user/:id', protectRouter, getUser);

module.exports = router;
