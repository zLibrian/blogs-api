const express = require('express');
const token = require('../utils/handleToken');
const userService = require('../service/userService');

const loginRouter = express.Router();

loginRouter.post('/', async (req, res, _next) => {
  const { email, password } = req.body;
  if (!email || !password) throw new Error('REQUIRED_FIELDS');
  const user = await userService.getOne(email, password);
  if (!user) throw new Error('INVALID_FIELDS');
  const encoded = await token.encoder(user);
  return res.status(200).json({ token: encoded });
});

module.exports = loginRouter;