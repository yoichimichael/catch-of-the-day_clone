import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import fishes from '../sample-fishes';
import Fish from './Fish'
import base from '../base';

class App extends Component {

  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;

    // this is not a React ref, but a firebase ref
    // this is a reference to the Firebase datase
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      // syncs App's sync state
      context: this,
      state: 'fishes'
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish
    this.setState({ fishes });
  }

  loadSampleFishes = () => {
    this.setState({ fishes })
  }

  addToOrder = (key) => {
    // 1. take a copy of state
    const order = {... this.state.order}
    // 2. Either add or update order
    order[key] = order[key] + 1 || 1; 
    // 3. Call setState to update our state object
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
                    {/* component instance */}
           <Header tagline="Fresh Seafood Market"/>
           <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish 
                key={key} 
                index={key}
                fishDetails={this.state.fishes[key]} 
                addToOrder={this.addToOrder}
              />
            ))}
           </ul>
        </div>
        {/* component instance */}
        <Order fishes={this.state.fishes} order={this.state.order}/>
        {/* component instance */}
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes }/>
 
      </div>
    )
  }
}

export default App;