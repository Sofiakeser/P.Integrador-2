var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.index);

router.get('/login', indexController.login);

router.get('/register', indexController.register);

router.get('/product-add', indexController.productA);

module.exports = router;

