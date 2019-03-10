'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, { tableName: 'Users'});
  user.associate =  (models) => {
    this.hasMany(models.OrderItem, {
      foreignKey: "OrderItem",
      constraint: false,
      onDelete: "CASCADE"
    });
  };
  return Users;
};
