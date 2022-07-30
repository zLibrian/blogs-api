const model = require('../database/models');

const categoryService = {
  create: async (name) => {
    const created = await model.Category.create(name);
    return created;
  },
  list: async () => {
    const categories = await model.Category.findAll();
    return categories;
  },
};

module.exports = categoryService;