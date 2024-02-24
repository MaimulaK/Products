const router = require("express").Router();
const { Category } = require("../../db/models");
const CategoryPage = require("../../components/CategoryPage");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    const document = res.renderComponent(CategoryPage, {
      title: "Kategorii",
      categories,
    });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
