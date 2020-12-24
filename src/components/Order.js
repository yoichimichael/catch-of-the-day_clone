import React, { Component } from 'react';
import { formatPrice } from '../helpers';
// for transition animation
import { TransitionGroup, CSSTransition } from 'react-transition-group'; 

class Order extends Component {

  // helper render function 
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    // if fish exists AND fish.status === 'available
    const isAvailable = fish && fish.status === 'available';

    // make sure fish is loaded before we continue
    // this prevents 'fish is unavailable' from flashing before load
    if (!fish) return null;

    if(!isAvailable) {
      return (
        <CSSTransition 
      // note the pluralized classNames
        classNames="order" 
        key={key} 
        timeout={{ enter: 250, exit: 250}}
        >
          <li key={key}>
            {/* fallback to account for missing fish if removed from inventory */}
            Sorry {fish? fish.name : 'fish'} is no longer available
          </li>
        </CSSTransition>
      )
    }
    return (
      <CSSTransition 
      // note the pluralized classNames
        classNames="order" 
        key={key} 
        timeout={{ enter: 500, exit: 3000}}
      >
        <li key={key}>
          {count} lbs {fish.name}
          {formatPrice(count * fish.price)}
          {/* '&times' is special symbol for 'x' */}
          <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
        </li>
      </CSSTransition>
    )

  }

  render() {

    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>

    )
  }
}

export default Order;