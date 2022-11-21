const { postService } = require('../services');
const { categoryService } = require('../services');

const addNewPost = async (req, res) => {
  const { body, user } = req;
  const { categoryIds } = req.body;

  const categories = await Promise.all(categoryIds
    .map((id) => categoryService.findCategoryById(id)));
  const invalidCategories = categories.some((category) => category === null);

  if (invalidCategories) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const newPost = await postService.addNewPost(body, user);

  return res.status(201).json(newPost);
};

module.exports = {
  addNewPost,
};