import React, { Component } from 'react';
import photo from '../../assets/elves.jpeg';


// import './frontend/src/App.css';

class GroupPP extends Component {
  render() {
    return (
      <div>
        <img src={photo} width='180' height='180' alt='profile photo' />{' '}
      </div>
    );
  }
}

export default GroupPP;
