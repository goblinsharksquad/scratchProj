import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// // import './App.css';

//Class *component* extends Component is the same as creating a function 

//Link component is used to dynamically traverse pages without having to 
//reload as you would with static html.
//file paths are linked and are accessible through the navbar component.


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
            <Link to='/dasboard'>
              <i className='surprise'>Events</i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
