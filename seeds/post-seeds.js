const { Post } = require('../models');

const postdata = [
  {
    title: 'Creating Wireframes',
    post_url: 'https://careerfoundry.com/en/blog/ux-design/how-to-create-your-first-wireframe/',
    user_id: 1
  },
  {
    title: 'More About Progressive Web Apps from Web.dev',
    post_url: 'https://web.dev/progressive-web-apps/',
    user_id: 1
  },
  {
    title: 'Thoughts About Mobile First Design.',
    post_url: 'https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00',
    user_id: 1
  },
  {
    title: 'Do you need inspiration for your portfolio?',
    post_url: 'https://www.behance.net/',
    user_id: 1
  },
  {
    title: 'Why Hidden Elements May Not Be the Best Choice for Your Site',
    post_url: 'https://alistapart.com/article/now-you-see-me/',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
