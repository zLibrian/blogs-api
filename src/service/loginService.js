const model = require('../database/models');
const token = require('../utils/handleToken');

const loginService = async (email) => {
  const user = await model.User.findOne({ where: { email } });
  if (!user) throw new Error('INVALID_FIELDS');
  const encoded = await token.encoder(user);
  return encoded;
};

module.exports = loginService;