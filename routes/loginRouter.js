var express = require('express');
var router = express.Router();
const { getLogin, postLogIn, logout } = require('../controllers/loginController')


/* GET home page. */
router.get('/', getLogin);

/* POST login page. */
router.post('/login', postLogIn);

router.get('/logout', logout);

module.exports = router;
