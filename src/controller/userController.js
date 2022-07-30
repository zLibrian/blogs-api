const userService = require('../service/userService');

const userController = {
  create: async (req, res, _next) => {
    const encodedUser = await userService.create(req.body);
    return res.status(201).json({ token: encodedUser });
  },
};

module.exports = userController;