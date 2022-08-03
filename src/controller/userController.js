const userService = require('../service/userService');

const userController = {
  create: async (req, res, _next) => {
    const encodedUser = await userService.create(req.body);
    return res.status(201).json({ token: encodedUser });
  },
  list: async (req, res, _next) => {
    const users = await userService.list();
    return res.status(200).json(users);
  },
  getById: async (req, res, _next) => {
    const id = parseInt(req.params.id, 10);
    const user = await userService.getById(id);
    if (!user) throw new Error('USER_NOT_FOUND');
    return res.status(200).json(user);
  },
  remove: async (req, res, _next) => {
    const id = req.user;
    await userService.remove(id);
    return res.status(204).end();
  },
};

module.exports = userController;