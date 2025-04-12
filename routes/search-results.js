const express = require("express")
const router = express.Router() 
const searchRController = require("../controllers/searchRController") /*--> Aca lo estamos llamando para usarlo*/

router.get("/", searchRController.index)

module.exports = router /*esto va siempre al final del docs*/