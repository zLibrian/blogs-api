const express = require('express');
const userController = require('../controller/userController');
const joiValidator = require('../middleware/joiValidator');
const userSchema = require('../schema/userSchema');

const userRouter = express.Router();

userRouter.post('/', joiValidator(userSchema), userController.create);

module.exports = userRouter;