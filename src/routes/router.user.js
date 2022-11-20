const express = require('express');
const { userController } = require('../controllers');
const { userValidation } = require('../middlewares/validations');

const route = express.Router();

route.post('/', userValidation, userController.newUser);

module.exports = route;