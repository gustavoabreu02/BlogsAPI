const express = require('express');
const { login } = require('../controllers/login.controller');
const { emailValidation } = require('../middlewares/validations');

const routes = express.Router();

routes.post('/', emailValidation, login);

module.exports = routes;