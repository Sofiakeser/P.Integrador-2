const express = require("express")
const router = express.Router() 
const loginController = require("../controllers/loginController") /*--> Aca lo estamos llamando para usarlo*/

router.get("/", loginController.index)

module.exports = router /*esto va siempre al final del docs*/