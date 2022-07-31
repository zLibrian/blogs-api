'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const User = (sequelize, DataTypes) => {
  const userModel = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
  }, { timestamps: false });
  userModel.associate = (models) => {
    userModel.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'blogposts' })
  }
  return userModel;
};

module.exports = User;