const React = require('react');

function CategoryItem({ category }) {
    // console.log(category,);
  return (
    <div className='categoryItem'>
      <h3>{category.name}</h3>
      <img src={category.image}/>
    </div>
  );
}

module.exports = CategoryItem;
