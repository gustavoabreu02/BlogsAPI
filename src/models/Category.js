const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'categories',
    });
    return Category;
  }
  
  module.exports = CategoryModel;