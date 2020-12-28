import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends Component {

  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string, 
      name: PropTypes.string,  
      desc: PropTypes.string, 
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  }

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
      <button 
        onClick={() => this.props.deleteFish(this.props.index)}
      >
        Remove Fish
      </button>
    </div>
  }
}

export default EditFishForm;