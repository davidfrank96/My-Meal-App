'use strict';
module.exports = (sequelize, DataTypes) => {
    const Meal = sequelize.define('Meal', {
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
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER,
            default: null
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },
        catererId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    }, { tableName: "Meal" });
    meal.associate = (models) => {
        this.hasMany(models.Caterer,  {
          foreignKey: "catererId",
          constraint: true,
          onDelete: "CASCADE"
        });
    };
    return Meal;
};

