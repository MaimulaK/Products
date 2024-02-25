const router = require('express').Router();
const { Product } = require('../../db/models');
const ProductsPage = require('../../components/ProductsPage');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    const document = res.renderComponent(ProductsPage, {
      title: 'Produktii',
      products,
    });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
