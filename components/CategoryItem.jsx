const React = require('react');

function CategoryItem({ category }) {
  // console.log(category,);
  return (
    <div className='categoryItem'>
      <h3>{category.nameCategory}</h3>
      <button>
        <a href={`/products/${category.id}`}><img src={category.img} /></a>
        
      </button>
      <button className='button-Delete'>Удалить категорию</button>
    </div>
  );
}

module.exports = CategoryItem;
