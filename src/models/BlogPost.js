const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts',
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  
    return BlogPost;
  }
  
  module.exports = BlogPostModel;