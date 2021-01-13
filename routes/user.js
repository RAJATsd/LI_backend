const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

//router.post('/addExperienceAndEducation',)
router.post('/addBasicInfo',userController.postBasicUserInfo);

module.exports = router;