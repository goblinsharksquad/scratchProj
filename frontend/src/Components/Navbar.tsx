import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <Link to='/LandingPage'>
          <i className='home'></i>
        </Link>
        <Link to='/ProfilePage'>
          <i className='profile'></i>
        </Link>
        <Link to='/GroupPage'>
          <i className='group'></i>
        </Link>
        <Link to='/FindAnEvent'>
          <i className='surprise'></i>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
