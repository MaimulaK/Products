const router = require("express").Router();
const CategoryItem = require("../../components/CategoryItem");
const { Category } = require("../../db/models");

router.post("/", async (req, res) => {
  try {
    const { nameCategory, img } = req.body;
    const data = {
      nameCategory,
      img,
    };
    const category = await Category.create(data);
    if (category) {
      const html = res.renderComponent(
        CategoryItem,
        { category },
        { doctype: false }
      );
      res.status(201).json({ message: "success", html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
