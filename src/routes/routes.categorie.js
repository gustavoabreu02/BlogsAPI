const express = require('express');
const { categoryController } = require('../controllers');
const { tokenValidation } = require('../middlewares/validations');

const route = express.Router();

route.post('/', tokenValidation, categoryController.newCategory);

module.exports = route;