const router = require('express').Router();
const CategoryItem = require('../../components/CategoryItem');
const { Category } = require('../../db/models');

router.post('/', async (req, res) => {
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
      res.status(201).json({ message: 'success', html });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const category = await Category.findOne({ where: { id } });
//     res.status(200).json(category);
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.destroy({ where: { id } });
    if (result > 0) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
