'use strict';

const games1 = [1, 2, 22, 25, 75, 82, 68, 89, 92, 95, 120, 150, 153]

const games2 = [3, 4, 23, 26, 77, 88, 69, 80, 94, 96, 125, 154, 155]

function createSeeder(games, gameShelfId) {
  const arr = []
  for (let gameId of games) {
    const obj =   {
      play_status: 'Playing',
      gameId,
      gameShelfId,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    arr.push(obj)
  }
  return arr
}

const seeder = [
  ...createSeeder(games1, 1),
  ...createSeeder(games2, 2)
]

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Shelf_Entries', seeder, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Shelf_Entries', null, {});
  }
};
