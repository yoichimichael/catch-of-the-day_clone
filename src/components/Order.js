import React, { Component } from 'react';

class Order extends Component {
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
        <h2>Order!!!</h2>
        {orderIds}
        <div className="total">
          <strong>{total}</strong>
        </div>
      </div>

    )
  }
}

export default Order;