const express = require("express")
const router = express.Router() 
const profileController = require("../controllers/profileController") /*--> Aca lo estamos llamando para usarlo*/

router.get("/", profileController.index)

router.get('/login', profileController.login);

router.post('/processLogin', profileController.processLogin);

router.get('/register', profileController.register);

router.post('/processRegister', profileController.create);

router.post('/logout', profileController.logout);

module.exports = router /*esto va siempre al final del docs*/