const React = require('react');

function CategoryItem({ category }) {
    // console.log(category,);
  return (
    <div className='categoryItem'>
      <h3>{category.nameCategory}</h3>
      <img src={category.img}/>
    </div>
  );
}

module.exports = CategoryItem;
