const categoryService = require('../service/categoryService');

const categoryController = {
  create: async (req, res, _next) => {
    const { name } = req.body;
    const newCategory = await categoryService.create({ name });
    return res.status(201).json(newCategory);
  },
  list: async (req, res, _next) => {
    const categories = await categoryService.list();
    return res.status(200).json(categories);
  },
};

module.exports = categoryController;