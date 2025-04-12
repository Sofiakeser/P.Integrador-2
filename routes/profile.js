const express = require("express")
const router = express.Router() 
const profileController = require("../controllers/profileController") /*--> Aca lo estamos llamando para usarlo*/

router.get("/", profileController.index)

module.exports = router /*esto va siempre al final del docs*/