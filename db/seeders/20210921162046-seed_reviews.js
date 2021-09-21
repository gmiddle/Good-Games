'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
      {
        gameId: '1',
        userId: '1',
        rating: '5',
        spoiler_status: true,
        review: 'This is a very good game! Would recommend to a friend.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
