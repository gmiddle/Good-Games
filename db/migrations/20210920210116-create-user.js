'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING(25),
        unique:true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(80),
        unique:true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(80)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
