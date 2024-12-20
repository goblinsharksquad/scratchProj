import React from 'react';
// import photo from '../../assets/santa.png';
import GroupAbout from './Components/Group/Group-About';
import GroupInt from './Components/Group/Group-Interests';
import './App.css';

function Group() {
  return (
    <div className='Group'>
      <br />
      <GroupAbout />
      <br />
      <h1>
        <GroupInt />
        <h1 id='interestsSection' className='interests'>
          Interests
        </h1>
      </h1>
    </div>
  );
}

export default Group;
