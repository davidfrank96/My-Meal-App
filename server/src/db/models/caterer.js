'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caterer = sequelize.define('Caterer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, { tableName: 'Caterer'});
  Caterer.associate = (models) => {
    this.hasMany(models.Caterer, {
      foreignKey: false,
      constraint: true,
      onDelete: "CASCADE"
    });
  };
  return Caterer;
};

export default Caterer;