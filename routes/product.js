const express = require("express")
const router = express.Router() 
const productController = require("../controllers/productController") /*--> Aca lo estamos llamando para usarlo*/

router.get("/", productController.index)

module.exports = router /*esto va siempre al final del docs*/