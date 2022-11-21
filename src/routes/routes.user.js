const express = require('express');
const { userController } = require('../controllers');
const { userValidation } = require('../middlewares/validations');
const { tokenValidation } = require('../middlewares/validations');

const route = express.Router();

route.post('/', userValidation, userController.newUser);

route.get('/', tokenValidation, userController.getAllUsers);

route.get('/:id', tokenValidation, userController.getUserById);

route.delete('/me', tokenValidation, userController.deleteUser);

module.exports = route;