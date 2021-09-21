'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Game_Shelves', [
      {
        shelf_name: 'Demo Shelf 1',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        shelf_name: 'Demo Shelf 2',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Game_Shelves', null, {});
  }
};
