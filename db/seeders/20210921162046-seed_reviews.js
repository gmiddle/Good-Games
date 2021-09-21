'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
      {
        gameId: '1',
        userId: '1',
        rating: '5',
        spoiler_status: 'John Doe',
        review: 'This is a very good game! Would recommend to a friend.',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
