import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    console.log("adding a fish!")
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
                    {/* component instance */}
           <Header tagline="Fresh Seafood Market"/>
           <Header tagline="I am Cool"/>
        </div>
        {/* component instance */}
        <Order />
        {/* component instance */}
        <Inventory addFish={this.addFish} />
 
      </div>
    )
  }
}

export default App;