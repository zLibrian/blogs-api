const blogPostService = require('../service/blogPostService');

const blogPostController = {
  create: async (req, res, _next) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    if (!title || !content || !categoryIds.length) throw new Error('MISSING_FIELDS');
    const newPost = await blogPostService.create({ title, content, userId: id, categoryIds });
    return res.status(201).json(newPost);
  },
};

module.exports = blogPostController;