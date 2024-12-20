import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// // import './App.css';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul>
          <li>
            <Link to='/'>
              <i className='home'>Home</i>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <i className='profile'>Profile</i>
            </Link>
          </li>
          <li>
            <Link to='/GroupPage'>
              <i className='group'>Group Page</i>
            </Link>
          </li>
          <li>
            <Link to='/FindAnEvent'>
              <i className='surprise'>Events</i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
