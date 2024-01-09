const { Router } = require("express");
const controllers = require('../controllers')
const middlewares = require('../middlewares') 



const router = Router()


router.post('/signup',  middlewares.createUserValidation, controllers.createUser);
router.post('/login',  middlewares.loginUserValidation, controllers.loginUser);


module.exports = router