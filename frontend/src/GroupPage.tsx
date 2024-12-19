import React from 'react';
import Navbar from './Components/Navbar.js';
// import ProfilePhoto from './Components/Profile/Profile Photo.tsx';
// import GroupAbout from './Components/Group/Group-About';
// import GroupInt from './Components/Group/Group-Interests';
import './App.css';

function Group() {
  return (
    <div className='Group'>
      <Navbar />
      <br />
      {/* <ProfilePhoto /> */}
      <br />
      {/* //will take in about elements and photo */}
      {/* <GroupAbout /> */}
      <br />
      <h1>
        {/* <GroupInt /> */}
        <h1 id='interestsSection' className='interests'>
          Interests
        </h1>
      </h1>
    </div>
  );
}

export default Group;
