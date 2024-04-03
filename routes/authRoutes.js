const express =require('express')
const authController= require('../controller/authController');
const {userAuth} =require('../middlewares/userAuth')
const router=express.Router();


router.post('/UserSignup',authController.UserSignup);
router.post('/UserLogin',authController.UserLogin);


module.exports = router;