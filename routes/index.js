var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.index);

router.get('/login', indexController.login);

//router.post('/login', indexController.login);

router.get('/register', indexController.register);

router.post('/register', indexController.create);

router.get('/product-add', indexController.productA);

router.get('/productos/:id', indexController.product); /// preguntar si esta bien 

module.exports = router;

