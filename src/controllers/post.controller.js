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

const getPosts = async (_req, res) => {
    const posts = await postService.findAllPosts();
  
    return res.status(200).json(posts);
  };

const getPostById = async (req, res) => {
    const { id } = req.params;
  
    const post = await postService.findPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
  
    return res.status(200).json(post);
  };

const updatePostById = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
  
    const post = await postService.findPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    if (req.user !== post.userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
  
    const newPost = await postService.updatePost({
      title,
      content,
      updated: new Date(),
    }, id);
  
    return res.status(200).json(newPost);
  };

const deletePost = async (req, res) => {
    const { id } = req.params;
  
    const post = await postService.findPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    if (req.user !== post.userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
  
    await postService.deletePost(id);
  
    return res.status(204).send();
  };

module.exports = {
  addNewPost,
  getPosts,
  updatePostById,
  getPostById,
  deletePost,
};