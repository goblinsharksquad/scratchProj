//Imported React library
//Created a Group Page file to compile the components for the groups
//that we expect our User to be able to see and join.

import React from 'react';

//Components used

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
