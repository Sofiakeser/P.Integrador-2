const express = require("express")
const router = express.Router() 
const productAController = require("../controllers/productAController") /*--> Aca lo estamos llamando para usarlo*/

router.get("/", productA.index)

module.exports = router /*esto va siempre al final del docs*/