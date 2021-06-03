import React from 'react'; 

// alternate to above:
// import React, { Component } from 'react';
// class StorePicker extends Component {}

// importing only the render method from the 'react-dom' dependency
import { render } from 'react-dom';

// need to use relative path
// can leave off file extension, as .js is assumed
import Router from './components/Router';

import './css/style.css';

render(<Router />, document.getElementById('main'));