const React = require('react');

function FormAddCategory() {
  return (
    <form className='add-form'>
      <input type='text' name='name' placeholder='Name'></input>
      <input type='text' name='image' placeholder='Image'></input>
      <button>Add</button>
    </form>
  );
}

module.exports = FormAddCategory;
