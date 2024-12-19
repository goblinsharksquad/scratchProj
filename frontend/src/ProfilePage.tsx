import React from 'react';
import Navbar from './Components/Navbar.js';
// import ProfilePhoto from './Components/Profile/Profile Photo.tsx';
import About from './Components/Profile/About';
import Interests from './Components/Profile/Interests';
import './App.css';

function Profile() {
  return (
    <div className='profile'>
      <Navbar />
      <br />
      {/* <ProfilePhoto /> */}
      <br />
      {/* //will take in about elements and photo */}
      <About />
      <br />
      <hr>
        <Interests />
        <h1 id='interestsSection' className='interests'>
          Interests
        </h1>
      </hr>
    </div>
  );
}

export default Profile;
