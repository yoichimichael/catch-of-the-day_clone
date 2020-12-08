import React from 'react';

// capitalize first letter of class name
class StorePicker extends React.Component {
  render() {
    
    return (
      // this is a store picker
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"/>
        <button type="submit">Visit Store →</button>
      </form>
    )
    // Example of JSX
    // return <p>I am the Store Picker!</p>

    // Example of no-JSX element creation:
    // React.createElement(‘p’, { className: ‘hey }, “Heyoooo’);
    
  }
}

export default StorePicker;