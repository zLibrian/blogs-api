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
  list: async () => {
    const users = await model.User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  },
  getById: async (id) => {
    const user = await model.User.findByPk(id, { attributes: { exclude: ['password'] } });
    return user;
  },
  remove: async (id) => {
    const deletedUser = await model.User.destroy({ where: { id } });
    return deletedUser;
  },
};

module.exports = userService;