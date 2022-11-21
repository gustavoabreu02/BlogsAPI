const { BlogPost, PostCategory } = require('../models');

const createPostCategory = async (postId, categoryId) => {
  const postCategory = await PostCategory.create({ postId, categoryId });

  return postCategory;
};

const addNewPost = async (post, userId) => {
  const { title, content, categoryIds } = post;

  const { dataValues: { id, updated, published } } = await BlogPost
  .create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });

  await Promise.all(categoryIds
    .map((category) => createPostCategory(id, category)));

  const newPost = { id, title, content, userId, published, updated };

  return newPost;
};

module.exports = {
  addNewPost,
};