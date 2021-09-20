'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Game_Shelves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shelf_name: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Game_Shelves');
  }
};
