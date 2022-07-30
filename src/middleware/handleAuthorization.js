const token = require('../utils/handleToken');

/** @type {import('express').RequestHandler} */
const handleAuthorization = async (req, res, next) => {
  const { authorization: userToken } = req.headers;
  if (!userToken) throw new Error('TOKEN_NOT_FOUND');
  const isTokenValid = await token.decoder(userToken);
  if (!isTokenValid) throw new Error('INVALID_TOKEN');
  return next();
};

module.exports = handleAuthorization;