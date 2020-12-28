import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../helpers';
// for transition animation
import { TransitionGroup, CSSTransition } from 'react-transition-group'; 

class Order extends Component {

  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func
  }

  // helper render function 
  renderOrder = (key) => {
    

    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    console.log(count);

    // if fish exists AND fish.status === 'available
    const isAvailable = fish && fish.status === 'available';

    const transitionOptions = {
      //note pluralized class names
      classNames: "order",
      key: {key},
      timeout: { enter: 500, exit: 500}
    };

    // make sure fish is loaded before we continue
    // this prevents 'fish is unavailable' from flashing before load
    if (!fish) return null;

    if(!isAvailable) {
      return (
        // reusable options object
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            {/* fallback to account for missing fish if removed from inventory */}
            Sorry {fish? fish.name : 'fish'} is no longer available
          </li>
        </CSSTransition>
      )
    }
    
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition 
                classNames="count" 
                key={count} 
                // note: as an object, this could be defined in a variable somewhere else and inserted by name, instead of as an object literal, like below
                timeout={{enter: 500, exit: 500}}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup> 
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            {/* '&times' is special symbol for 'x' */}
            <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
          </span>
        </li>
      </CSSTransition>
    )

  }

  render() {

    const orderIds = Object.keys(this.props.order);

    console.log(orderIds);

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