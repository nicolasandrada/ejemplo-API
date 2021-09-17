var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.getAll);
router.get('/:id', userController.getByID);
router.delete('/:id', userController.delete);


module.exports = router;
