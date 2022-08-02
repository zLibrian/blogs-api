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
    const userPosts = await blogPostService.list();
    return res.status(200).json(userPosts);
  },
  getById: async (req, res, _next) => {
    const id = parseInt(req.params.id, 10);
    const userPosts = await blogPostService.getById(id);
    return res.status(200).json(userPosts);
  },
  update: async (req, res, _next) => {
    const id = parseInt(req.params.id, 10);
    const userId = req.user.id;
    const { title, content } = req.body;
    if (!title || !content) throw new Error('MISSING_FIELDS');
    await blogPostService.update(title, content, id, userId);
    const postUpdated = await blogPostService.getById(id);
    return res.status(200).json(postUpdated);
  },
};

module.exports = blogPostController;