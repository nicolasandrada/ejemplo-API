var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

/* Pagina principal . */
router.get('/', productController.getAll );

/* Registro */
router.get('/register', mainController.register);
router.post('/register', userController.store);

/* */
router.get('/login', mainController.login);
router.post('/login', userController.login);

router.get('/logout', userController.logout);

module.exports = router;
