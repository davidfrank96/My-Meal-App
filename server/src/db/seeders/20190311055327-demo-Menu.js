'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Menus",
      [
        {
          meals: [],
          catererId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      { tableName: "Menus" }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Menus", null, {});
  }
};
