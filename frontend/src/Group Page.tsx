import React from 'react';
import Navbar from './Components/Navbar.js';
// import photo from '../../assets/santa.png';
import GroupAbout from './Components/Group/Group-About.tsx';
import GroupInt from './Components/Group/Group-Interests.tsx';
import './App.css';



function Group() {
  return (
    <div className='Group'>
      <Navbar />
      <br />
      {/* <ProfilePhoto /> */}
      <br />
      {/* //will take in about elements and photo */}
      <GroupAbout />
      <br />
      <hr>
        <GroupInt />
        <h1 id='interestsSection' className='interests'>
          Interests
        </h1>
      </hr>
    </div>
  );
}

export default Group;
