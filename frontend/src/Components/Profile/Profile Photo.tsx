import React, { Component } from 'react';
import photo from '../../assets/santa.png';
// import './frontend/src/App.css';


//Class *component* extends Component is the same as creating a function 

class ProfilePhoto extends Component {
  render() {
    return (
      <div>
        {/* photo is passed in as a prop to later be used in the About component */}
        <img src={photo} width='180' height='180' alt='profile photo' />{' '}
      </div>
    );
  }
}

export default ProfilePhoto;
