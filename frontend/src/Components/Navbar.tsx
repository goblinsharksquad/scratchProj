import React, { Component } from 'react';

import './App.css';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <a href='Home'>
          <i className='home'></i>
        </a>
        <a href='Groups'>
          <i className='group'></i>
        </a>
        <a href='Find An Event'>
          <i className='event'></i>
        </a>
        <a href='Surprise Me'>
          <i className='surpise'></i>
        </a>
      </nav>
    );
  }
}

export default Navbar;
