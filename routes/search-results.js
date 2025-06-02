const express = require("express")
const router = express.Router() 
const searchRController = require("../controllers/searchRController") 

router.get("/", searchRController.index)
router.get("/search", searchRController.search)
router.get("/detalle/:id", searchRController.show)

module.exports = router 