const blogPostService = require('../service/blogPostService');

const blogPostController = {
  create: async (req, res, _next) => {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    if (!title || !content || !categoryIds.length) throw new Error('MISSING_FIELDS');
    const newPost = await blogPostService.create({ title, content, userId: id, categoryIds });
    return res.status(201).json(newPost);
  },
  list: async (req, res, _next) => {
    const { id } = req.user;
    const userPosts = await blogPostService.list(id);
    return res.status(200).json(userPosts);
  },
};

module.exports = blogPostController;