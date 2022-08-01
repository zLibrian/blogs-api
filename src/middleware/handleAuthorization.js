const token = require('../utils/handleToken');

/** @type {import('express').RequestHandler} */
const handleAuthorization = async (req, res, next) => {
  const { authorization: userToken } = req.headers;
  if (!userToken) throw new Error('TOKEN_NOT_FOUND');
  const decodedUser = await token.decoder(userToken);
  if (!decodedUser) throw new Error('INVALID_TOKEN');
  req.user = decodedUser.payload;
  return next();
};

module.exports = handleAuthorization;