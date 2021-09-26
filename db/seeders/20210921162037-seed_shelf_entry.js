'use strict';

const games1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const games2 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

const games3 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]

const games4 = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]

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
  ...createSeeder(games2, 2),
  ...createSeeder(games3, 3),
  ...createSeeder(games4, 4)
]

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Shelf_Entries', seeder, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Shelf_Entries', null, {});
  }
};
