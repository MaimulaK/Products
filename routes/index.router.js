const router = require('express').Router();

const mainRouter = require('./views/mainPage.view.router');

router.use('/', mainRouter);

module.exports = router;
