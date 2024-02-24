const React = require('react');
const Layout = require('./Layout');
const CategoryItem = require('./CategoryItem');
const FormAddCategory = require('./FormAddCategory');

function CategoryPage({ title, categories }) {
  // console.log(categories);
  return (
    <Layout title={title}>
      <div className='category_container'>
        <div>Categories</div>
        <h3>Добавить категорию</h3>
        <FormAddCategory />
        <div className='card-container'>
          {categories.map((category) => (
            <div key={category.id}>
              <CategoryItem category={category} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}


module.exports = CategoryPage;
