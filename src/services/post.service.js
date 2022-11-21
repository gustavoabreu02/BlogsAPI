const { Category, User, BlogPost, PostCategory } = require('../models');

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

const findAllPosts = async () => {
    const posts = await BlogPost.findAll({
      include: [
        { model: Category, as: 'categories', through: { attributes: [] } },
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
      ],
    });
  
    return posts;
  };

const findPostById = (id) => {
    const post = BlogPost.findOne({
      where: { id },
      include: [
        { model: Category, as: 'categories', through: { attributes: [] } },
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
      ],
    });
  
    return post;
  };
  
const updatePost = async (post, id) => {
    await BlogPost.update(post, { where: { id } });
  
    return findPostById(id);
  };

const deletePost = async (id) => {
    await BlogPost.destroy({ where: { id } });
  };

module.exports = {
  addNewPost,
  findAllPosts,
  updatePost,
  findPostById,
  deletePost,
};