// can import this because it's part of our dependencies
// make sure second react is lower case
import React from 'react'; 

// importing only the render method from the 'react-dom' dependency
import { render } from 'react-dom';

// alternate 
// import { Component } from 'react';
// class StorePicker extends Component {}

import StorePicker from './components/StorePicker.js'

render(<StorePicker />, document.getElementById('main'));