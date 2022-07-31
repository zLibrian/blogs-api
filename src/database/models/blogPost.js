
/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const BlogPost = (sequelize, DataTypes) => {
  const blogPostModel = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, references: { model: 'User', key: 'id' } },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
  }, { timestamps: false });
  blogPostModel.associate = (models) => {
    blogPostModel.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return blogPostModel;
};

module.exports = BlogPost;