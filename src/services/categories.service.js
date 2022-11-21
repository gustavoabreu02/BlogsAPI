const { Category } = require('../models');

const addNewCategory = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

const findAll = async () => {
    const categories = await Category.findAll();
  
    return categories;
  };

const findCategoryById = async (categoryId) => {
    const findCategory = await Category.findByPk(categoryId);
  
    return findCategory;
  };
  
module.exports = {
  addNewCategory,
  findAll,
  findCategoryById,
};