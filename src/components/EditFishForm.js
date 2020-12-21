import React, { Component } from 'react';

class EditFishForm extends Component {
  render() {
    return <div className="fish-edit">
      <input type="text" name="name" value={this.props.fish.name} />
      <input type="text" name="price" value={this.props.fish.price} />
      <select type="text" name="status" value={this.props.fish.status}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" value={this.props.fish.desc}></textarea>
      <input type="text" name="image" value={this.props.fish.image} />
    </div>
  }
}

export default EditFishForm;