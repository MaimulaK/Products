const React = require('react');

function FormAddCategory() {
  return (
    <form className='add-form'>
      <input type='text' name='nameCategory' placeholder='Name'></input>
      <input type='text' name='img' placeholder='Image'></input>
      <button>Add</button>
    </form>
  );
}

module.exports = FormAddCategory;
