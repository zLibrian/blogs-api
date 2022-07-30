const model = require('../database/models');

const categoryService = {
  create: async (name) => {
    const created = await model.Category.create(name);
    return created;
  },
};

module.exports = categoryService;