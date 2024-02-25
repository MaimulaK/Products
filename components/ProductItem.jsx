const React = require('react');

function ProductItem({ product }) {
  return (
    <div className='productItem'>
      <h3>{product.nameItem}</h3>
      <h4>{product.decription}</h4>
      <h4>{`Цена за штуку: ${product.price}`}</h4>
      <h5>{`Остаток на складе: ${product.count}`}</h5>
      <button>Добавить в корзину</button>
    </div>
  );
}

module.exports = ProductItem;
