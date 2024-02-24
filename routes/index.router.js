const router = require("express").Router();

const mainRouter = require("./views/mainPage.view.router");
const categoryRouter = require("./views/categoryPage.view.router");

const categoryApiRouter = require("./api/category.api.router");

router.use("/", mainRouter);

router.use("/categories", categoryRouter);

router.use("/api/categories", categoryApiRouter);

module.exports = router;
