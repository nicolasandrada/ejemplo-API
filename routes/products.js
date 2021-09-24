var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');
const mainController = require('../controllers/mainController');

/* GET users listing. */
router.get('/', mainController.product);

router.post('/', productController.store);

router.get('/detail/:id', productController.getByID);

//router.delete('/delete/:id', productController.delete);

//router.get('/modify/:id', productController.getByID);

module.exports = router;
