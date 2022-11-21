const express = require('express');
const { categoryController } = require('../controllers');
const { tokenValidation } = require('../middlewares/validations');

const routes = express.Router();

routes.post('/', tokenValidation, categoryController.newCategory);
routes.get('/', tokenValidation, categoryController.getAllCategories);

module.exports = routes;