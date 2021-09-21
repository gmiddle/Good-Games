'use strict';

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function randomReview(rating) {
  const ratingReviews = {
    1: [
      'Worse game I have ever played!',
      'Why did this game cost any money?'
    ],
    2:[
      'The story was ok but otherwise skip this one.',
      'I want my money back.'
    ],
    3:[
      'Most average game I have ever played.',
      'I enjoyed it well enough but I would not recommend unless it is on a deep sale.'
    ],
    4:[
      'It was great but it could have been better without the DRM',
      'Not as good as the original but it is a must buy.'
    ],
    5:[
      'Best game I have ever played!',
      'How do I send you more money because this was too cheap for the value!'
    ]
  }
  // set the number of reviews for all rating values
  // they all must be the same.
  const numOfReviews = 2
  const randomNum = getRandomNum(0, numOfReviews-1);
  return ratingReviews[rating][randomNum];
}

// TODO add these after random generation
const fakeReviews = [
    {
    gameId: '1',
    userId: '1',
    rating: '5',
    spoiler_status: 'n',
    review: 'This is a very good game! Would recommend to a friend.',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    gameId: '22',
    userId: '2',
    rating: '1',
    spoiler_status: 'n',
    review: 'Why are the space dwarves taller then me? 1 foot out of 5!.',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

for (let i = 0; i <= 100; i++) {
  const rating = getRandomNum(1, 5)
  let newReview = {
    userId: getRandomNum(1, 100),
    rating: rating,
    review: randomReview(rating),
    gameId: getRandomNum(1, 184),
    spoiler_status: 'n',
    // spoiler_status: Boolean(Math.floor(Math.random())),
    createdAt: new Date(),
    updatedAt: new Date()
  }
  fakeReviews.push(newReview);
};

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', fakeReviews, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
