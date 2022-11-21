const express = require('express');
const { postController } = require('../controllers');
const { tokenValidation, 
    postValidation, updatePostValidation } = require('../middlewares/validations');

const routes = express.Router();

routes.post('/', tokenValidation, postValidation, postController.addNewPost);
routes.get('/', tokenValidation, postController.getPosts);
routes.put('/:id', tokenValidation, updatePostValidation, postController.updatePostById);
routes.get('/:id', tokenValidation, postController.getPostById);

module.exports = routes;