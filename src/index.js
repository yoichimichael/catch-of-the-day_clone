// can import this because it's part of our dependencies
// make sure second react is lower case
import React from 'react'; 

// importing only the render method from the 'react-dom' dependency
import { render } from 'react-dom';

// alternate 
// import { Component } from 'react';
// class StorePicker extends Component {}

// using just StorePicker after from would make React look for a node module dependency
// need to use relative path
// can leave off file extension, as .js is assumed
import StorePicker from './components/StorePicker';
import App from './components/App';

import './css/style.css';

render(<App />, document.getElementById('main'));