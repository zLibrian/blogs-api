const Sequelize = require('sequelize');
const { Op } = require('sequelize');

const models = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const blogPostService = {
  create: async ({ title, content, userId, categoryIds }) => {
    const { count } = await models.Category.findAndCountAll(
      {
        where: {
          id: { [Op.in]: categoryIds },
        },
      },
    );
    if (count !== categoryIds.length) throw new Error('CATEGORY_NOT_FOUND');

    const { dataValues: { id } } = await sequelize.transaction(async (t) => {
      const created = await models.BlogPost.create(
        { title, content, userId }, { transaction: t },
      );
      await created.addCategories(categoryIds, { transaction: t });
      return created;
    });
    return models.BlogPost.findOne({ where: { id } });
  },
};

module.exports = blogPostService;