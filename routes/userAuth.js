const express = require('express');
const authControllers = require('../controllers/userAuth');
const auth = require('../middleware/auth_jwt');

const router = express.Router();

router.post('/signup',authControllers.postSignup);
router.post('/signin',authControllers.postSignin);

router.get('/getUser',auth,authControllers.getUserInfo);

module.exports = router;
