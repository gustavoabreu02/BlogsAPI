const express = require('express');
const { postController } = require('../controllers');
const { tokenValidation, postValidation } = require('../middlewares/validations');

const routes = express.Router();

routes.post('/', tokenValidation, postValidation, postController.addNewPost);

module.exports = routes;