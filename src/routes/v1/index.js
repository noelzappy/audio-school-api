const express = require('express');
const config = require('../../config/config');

const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const bookRoute = require('./book.route');
const chapterRoute = require('./chapter.route');
const commentRoute = require('./comment.route');
const gradeRoute = require('./grade.route');
const chapterPlayRoute = require('./chapterPlay.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/books',
    route: bookRoute,
  },
  {
    path: '/chapters',
    route: chapterRoute,
  },
  {
    path: '/comments',
    route: commentRoute,
  },

  {
    path: '/grades',
    route: gradeRoute,
  },

  {
    path: '/chapter-plays',
    route: chapterPlayRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
