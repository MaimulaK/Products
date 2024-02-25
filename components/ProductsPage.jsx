const React = require('react');
const Layout = require('./Layout');
const ProductItem = require('./ProductItem');

function ProductsPage({ title, products }) {
  return (
    <Layout title={title}>
      <div className='products_container'>
        <h2>Продукты из выбранной категории</h2>
        <div className='product_card_container'>
          {products.map((product) => (
            <div key={product.id}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = ProductsPage;
