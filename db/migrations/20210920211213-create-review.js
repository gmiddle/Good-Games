'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rating: {
        allowNull: false,
        type: Sequelize.NUMERIC(2, 1)
      },
      review: {
        allowNull: false,
        type: Sequelize.STRING(2000)
      },
      spoiler_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        default: false
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Games' }
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
    return queryInterface.dropTable('Reviews');
  }
};
