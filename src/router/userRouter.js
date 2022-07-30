const express = require('express');
const userController = require('../controller/userController');
const handleAuthorization = require('../middleware/handleAuthorization');
const joiValidator = require('../middleware/joiValidator');
const userSchema = require('../schema/userSchema');

const userRouter = express.Router();

userRouter.post('/', joiValidator(userSchema), userController.create);
userRouter.get('/:id', handleAuthorization, userController.getById);
userRouter.get('/', handleAuthorization, userController.list);

module.exports = userRouter;