'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Genre_tag_joins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Games" }
      },
      genreTagId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Genre_tags" }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Genre_tag_joins');
  }
};
