var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.getAll);

router.get('/profile/:id', userController.getByID);

router.delete('/delete/:id', userController.delete);

router.put('/admin/:id', userController.admin);

router.get('/modify/:id', userController.getByID);

module.exports = router;
