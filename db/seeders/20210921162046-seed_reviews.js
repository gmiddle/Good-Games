'use strict';

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function randomReview(rating) {
  const ratingReviews = {
    1: [
      'Worse game I have ever played!',
      'Why did this game cost any money?',
      'Refunded, this was not worth my time.'
    ],
    2:[
      'The story was ok but otherwise skip this one.',
      'I want my money back.',
      'It looked fun and has good graphics but is bad otherwise.'
    ],
    3:[
      'Most average game I have ever played.',
      'I enjoyed it well enough but I would not recommend unless it is on a deep sale.',
      'Good price for such an average game.',
      'It\'s just ok.'
    ],
    4:[
      'It was great but it could have been better without the DRM',
      'Not as good as the original but it is a must buy.',
      'I was given this for my birthday, It is so much fun to play!',
      'This was well worth the time!'
    ],
    5:[
      'Best game I have ever played!',
      'How do I send you more money because this was too cheap for the value!',
      'Bought this for a friend! I must get as many people to try this as possible.',
      'I already beat this on one console but it was so good that I decided to buy it again.'
    ]
  }
  const numOfReviews = ratingReviews[rating].length
  const randomNum = getRandomNum(0, numOfReviews-1);
  return ratingReviews[rating][randomNum];
}

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
    review: 'Why are the space dwarves taller then me? 1 foot out of 5!',
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
