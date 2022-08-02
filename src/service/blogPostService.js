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
  list: async () => {
    const userPosts = await models.BlogPost.findAll(
      {
        include: [
          { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
          { model: models.Category, as: 'categories', through: { attributes: [] } },
        ],
      },
    );
    return userPosts;
  },
  getById: async (id) => {
    const userPost = await models.BlogPost.findByPk(id, {
      include: [
        { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
        { model: models.Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    if (!userPost) throw new Error('POST_DOES_NOT_EXIST');
    return userPost;
  },
  update: async (title, content, id, userId) => {
    const isUserBlogPostOwner = await blogPostService.getById(id);
    if (isUserBlogPostOwner.dataValues.userId !== userId) throw new Error('UNAUTHORIZED_USER');
    const [postUpdated] = await models.BlogPost.update(
      { title, content }, { where: { id, userId } },
    );
    return postUpdated;
  },
};

module.exports = blogPostService;