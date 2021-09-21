'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
        email: 'Demo@goodgames.com',
        user_name: 'Doug Demodome',
        // TODO update with hashed version
        password: "thisPasswordWillBeHashed",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
