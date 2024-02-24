const router = require('express').Router();

const mainRouter = require('./views/mainPage.view.router');
const categoryRouter = require('./views/categoryPage.view.router');

router.use('/', mainRouter);

router.use('/categories', categoryRouter);

module.exports = router;
