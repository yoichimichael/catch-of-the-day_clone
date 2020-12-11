import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
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
        <Inventory />
 
      </div>
    )
  }
}

export default App;