const express = require("express")
const router = express.Router() 
const searchRController = require("../controllers/searchRController") /*--> Aca lo estamos llamando para usarlo*/

router.get("/", searchRController.index)
router.get("searchR", searchRController.search)

module.exports = router /*esto va siempre al final del docs*/