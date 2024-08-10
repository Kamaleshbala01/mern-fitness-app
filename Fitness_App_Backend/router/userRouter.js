const userController= require('../controller/userController');
const router = require('express').Router();

router.post('/signup',userController.signup);
router.post('/login',userController.login);
router.post('/checkusername',userController.checkUser);
router.post('/checkEmailID',userController.checkEmail);
module.exports = router;