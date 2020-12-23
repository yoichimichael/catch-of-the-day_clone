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

    // reinstate localStorage
    const localStorageRef = localStorage.getItem(params.storeId)
    // console.log(JSON.parse(localStorageRef))
    if(localStorageRef){
      this.setState({ order: JSON.parse(localStorageRef) })
    }

    // this is not a React ref, but a firebase ref
    // this is a reference to the Firebase datase
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      // syncs App's sync state
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate(){
    localStorage.setItem(
      this.props.match.params.storeId, 
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish
    this.setState({ fishes });
  }

  updateFish = (key, updatedFish) => {
    // 1. take a copy of a current state
    const fishes = { ...this.state.fishes };
    // 2. Update that state
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  deleteFish = (key) => {
    // 1. take a copy of state
    const fishes = { ...this.state.fishes};
    // 2. update the copy
    // note that for firebase to register a deleted item, it needs to be set to null
    fishes[key] = null;
    // 3. update the state
    this.setState({ fishes })
  }

  loadSampleFishes = () => {
    this.setState({ fishes });
  }

  addToOrder = (key) => {
    // 1. take a copy of state
    const order = {... this.state.order}
    // 2. Either add or update order
    order[key] = order[key] + 1 || 1; 
    // 3. Call setState to update our state object
    this.setState({ order });
  }

  removeFromOrder = key => {
    // 1. take a copy of state
    const order = {... this.state.order}
    // 2. Remove that item from order
    // not mirroring to firebase, so don't need to set to null
    delete order[key];
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
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        {/* component instance */}
        <Inventory 
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
 
      </div>
    )
  }
}

export default App;