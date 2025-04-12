const express = require("express")
const router = express.Router() 
const registerController = require("../controllers/registerController") /*--> Aca lo estamos llamando para usarlo*/

router.get("/", registerController.index)

module.exports = router /*esto va siempre al final del docs*/