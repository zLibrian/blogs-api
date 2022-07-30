const model = require('../database/models');
const token = require('../utils/handleToken');

const userService = {
  create: async (data) => {
    const userExists = await model.User.findOne({ where: { email: data.email } });
    if (userExists) throw new Error('USER_ALREADY_REGISTERED');
    const { password, ...createdUser } = await model.User.create(data);
    const encodedUser = token.encoder(createdUser);
    return encodedUser;
  },
};

module.exports = userService;