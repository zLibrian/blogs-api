const express = require('express');
const categoryController = require('../controller/categoryController');
const handleAuthorization = require('../middleware/handleAuthorization');
const joiValidator = require('../middleware/joiValidator');
const categorySchema = require('../schema/categorySchema');

const categoryRouter = express.Router();

categoryRouter.post('/',
  handleAuthorization, joiValidator(categorySchema), categoryController.create);

module.exports = categoryRouter;