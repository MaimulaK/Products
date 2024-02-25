const router = require("express").Router();
const { Product } = require("../../db/models");
const ProductsPage = require("../../components/ProductsPage");
const { Category } = require("../../db/models");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.params);
    const category = await Category.findOne({ where: { id } });
    const products = await Product.findAll({
      where: { categoryId: id },
    });
    const document = res.renderComponent(ProductsPage, {
      title: "Produktii",
      category,
      products,
    });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
