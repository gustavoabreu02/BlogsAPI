const { categoryService } = require('../services');

const newCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });
  const { dataValues: { id } } = await categoryService.addNewCategory(name);
  console.log(id);

  return res.status(201).json({ id, name });
};

module.exports = {
  newCategory,
};