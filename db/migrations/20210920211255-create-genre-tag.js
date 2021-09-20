'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Genre_tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      genre_tag_name: {
        allowNull: false,
        type: Sequelize.STRING(20)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Genre_tags');
  }
};
