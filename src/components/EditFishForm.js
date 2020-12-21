import React, { Component } from 'react';

class EditFishForm extends Component {
  render() {
    return <div className="fish-edit">
      <input type="text" name="name" />
      <input type="text" name="price" />
      <input type="text" name="status" />
      <input type="text" name="desc" />
      <input type="text" name="image" />
    </div>
  }
}

export default EditFishForm;