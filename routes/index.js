var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.index);

router.get('/product-add', indexController.productA);

router.get('/productos/:id', indexController.product); 

module.exports = router;

