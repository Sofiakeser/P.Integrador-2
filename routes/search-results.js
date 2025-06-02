const express = require("express")
const router = express.Router() 
const searchRController = require("../controllers/searchRController") 

router.get("/", searchRController.index)
router.get("/searchR", searchRController.search)
router.get("/searchR/detalle/:id", searchRController.show)

module.exports = router 