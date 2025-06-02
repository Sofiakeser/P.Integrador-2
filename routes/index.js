var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.index);

router.get('/product-add', indexController.productA);

router.post('/product-add', indexController.agregarP);

router.get('/productos/:id', indexController.productD); 

router.post('/productos/:id', indexController.addComment)


module.exports = router;

