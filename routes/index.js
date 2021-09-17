var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');
const userController = require('../controllers/userController');

/* Pagina principal . */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Registro */
router.get('/register', mainController.register);
router.post('/register', userController.store);

/* */
router.get('/login', mainController.login);
router.post('/login', userController.login);

router.get('/logout', userController.logout);

module.exports = router;
