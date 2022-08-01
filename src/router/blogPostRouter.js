const express = require('express');
const blogPostController = require('../controller/blogPostController');
const handleAuthorization = require('../middleware/handleAuthorization');

const blogPostRouter = express.Router();

blogPostRouter.post('/', handleAuthorization, blogPostController.create);

module.exports = blogPostRouter;