import React, { Component } from 'react';
import photo from '../../assets/santa.png';
import './frontend/src/App.css';

class ProfilePhoto extends Component {
  render() {
    return (
      <div>
        <img src={photo} width='180' height='180' alt='profile photo' />{' '}
      </div>
    );
  }
}

export default ProfilePhoto;
