'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shelf_Entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      play_status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Games' }
      },
      gameShelfId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Game_Shelves' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shelf_Entries');
  }
};