const express = require("express")
const router = express.Router() 
const userController = require("../controllers/userController") /*--> Aca lo estamos llamando para usarlo*/

router.get('/login', userController.login);

router.post('/processLogin', userController.processLogin);

router.get('/register', userController.register);

router.post('/processRegister', userController.create);

router.post('/logout', userController.logout);

module.exports = router /*esto va siempre al final del docs*/