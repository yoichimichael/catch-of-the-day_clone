import React, { Component } from 'react';

class EditFishForm extends Component {

  handleChange = (e) => {
    // update that fish
    // 1. take a copy of the current fish
    const updatedFish = { 
      ...this.props.fish,
      // overwrites the property contained in the copy we received via above soread operator
      [e.currentTarget.name]: e.currentTarget.value  
    };
    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    return <div className="fish-edit">
      <input 
        type="text" 
        name="name" 
        onChange={this.handleChange} 
        value={this.props.fish.name} 
      />
      <input 
        type="text" 
        name="price" 
        onChange={this.handleChange} 
        value={this.props.fish.price} 
      />
      <select 
        type="text" 
        name="status" 
        onChange={this.handleChange} 
        value={this.props.fish.status}
      >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea 
        name="desc" 
        onChange={this.handleChange} 
        value={this.props.fish.desc}>

      </textarea>
      <input 
        type="text" 
        name="image" 
        onChange={this.handleChange} 
        value={this.props.fish.image} 
      />
    </div>
  }
}

export default EditFishForm;