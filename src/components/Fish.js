import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
  render() {

    // ES6 destructuring
    const { image, name, price, desc, status } = this.props.fishDetails;
    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable}>{isAvailable ? "Add To Order" : "Sold Out!"}</button>
      </li>
    )
  }
}

export default Fish;