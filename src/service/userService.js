const model = require('../database/models');

const userService = {
  getOne: async (email, password) => {
    const user = await model.User.findOne({
      where:
        { email, password },
      attributes: { exclude: ['password'] },
    });
    return user;
  },
};

module.exports = userService;