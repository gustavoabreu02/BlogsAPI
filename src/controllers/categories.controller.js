const { categoryService } = require('../services');

const newCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });
  const { dataValues: { id } } = await categoryService.addNewCategory(name);
  
  return res.status(201).json({ id, name });
};

const getAllCategories = async (_req, res) => {
    const categories = await categoryService.findAll();
  
    return res.status(200).json(categories);
  };

module.exports = {
  newCategory,
  getAllCategories,
};