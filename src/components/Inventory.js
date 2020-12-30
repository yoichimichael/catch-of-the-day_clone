import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base, { firebaseApp } from '../base';

class Inventory extends Component {

  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    addFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  }  

  // authData is user data from whichever platform was used to sign in
  authHandler = async (authData) => {
    // 1. lookup current store in firebase database
    const store = base.fetch()
    // 2. claim it if there's no owner
    // 3. set the state of the inventory component to reflect the current user
    console.log(authData)
  }

  authenticate = (provider) => {
    // create a new auth provider based on through whom user wants to sign in
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    // user signs in with a popup and then user data gets sent to authHander()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  }
  
  render() {
    return <Login authenticate={this.authenticate}/>
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => 
          <EditFishForm 
            key={key} 
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        )}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;