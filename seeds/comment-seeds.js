const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nice post',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Thanks for sharing',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'I agree',
    user_id: 2,
    post_id: 5
  },
  {
    comment_text: 'Nice post',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Thanks for sharing',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Nice post',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Thanks for sharing',
    user_id: 5,
    post_id: 2
  },
  {
    comment_text: 'Thanks for sharing',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: 'I agree',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Well written',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: 'I agree',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'I agree',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text:
      'I agree',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'I agree',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Thanks for sharing',
    user_id: 4,
    post_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
