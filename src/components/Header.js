import React, { Component } from 'react';

// stateless functional component
// implicit return
// destructured props
const Header = ({ tagline }) => (
  <header className="top">
    <h1>
      Catch 
      <span className="ofThe">  
        <span className="of">of</span> 
        <span  className="the">the</span>
      </span> 
      Day
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
    </h3>
  </header>
);

// regular component
// class Header extends Component {
//   render() {
//     return (
//         <header className="top">
//           <h1>
//             Catch 
//             <span className="ofThe">  
//               <span className="of">of</span> 
//               <span  className="the">the</span>
//             </span> 
//             Day
//           </h1>
//           <h3 className="tagline">
//             <span>{this.props.tagline}</span>
//           </h3>
//         </header>
//     )
//   }
// }

export default Header;