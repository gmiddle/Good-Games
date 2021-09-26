'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Game_Shelves', [
      {
        shelf_name: 'Favorites',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        shelf_name: 'Finished',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        shelf_name: 'Playing',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        shelf_name: 'Unplayed',
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
