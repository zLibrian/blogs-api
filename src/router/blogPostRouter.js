const express = require('express');
const blogPostController = require('../controller/blogPostController');
const handleAuthorization = require('../middleware/handleAuthorization');

const blogPostRouter = express.Router();

blogPostRouter.post('/', handleAuthorization, blogPostController.create);
blogPostRouter.get('/:id', handleAuthorization, blogPostController.getById);
blogPostRouter.put('/:id', handleAuthorization, blogPostController.update);
blogPostRouter.delete('/:id', handleAuthorization, blogPostController.remove);
blogPostRouter.get('/', handleAuthorization, blogPostController.list);

module.exports = blogPostRouter;