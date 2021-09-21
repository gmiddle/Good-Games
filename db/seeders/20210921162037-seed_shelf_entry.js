'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Shelf_Entries', [
      {
        play_status: 'Playing',
        gameId: '1',
        gameShelfId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        play_status: 'Unplayed',
        gameId: '2',
        gameShelfId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Shelf_Entries', null, {});
  }
};
