const router = require('express').Router();
const MainPage = require('../../components/MainPage');

router.get('/', (req, res) => {
  const data = res.renderComponent(MainPage, { title: 'sokkkiii' });
  res.send(data);
});

module.exports = router;