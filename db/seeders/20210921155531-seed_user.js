'use strict';
const bcrypt = require('bcryptjs');
const faker = require('faker');

const fakeUsers = [
  {
    email: 'Demo@goodgames.com',
    user_name: 'Doug_Demodome',
    password: bcrypt.hashSync("hashBrowns99$12", 10),
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'purcellgroup88@gmail.com',
    user_name: 'Dan_Purcell',
    password: bcrypt.hashSync("theseSpecsSuck&21", 10),
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

for (let i = 0; i <= 100; i++) {
  let newuser = {
    user_name: faker.internet.userName(),
    email:faker.internet.email(),
    password:bcrypt.hashSync(`sadPassword&${i}`, 10),
    createdAt: new Date(),
    updatedAt: new Date()
  }
  fakeUsers.push(newuser);
};

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', fakeUsers, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
