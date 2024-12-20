//Imported React library
import React from 'react';
//Created a Profile Page file to compile the components for the groups
//that we expect our User to be able to see once they log in or sign up.

//Components to be used
import About from './Components/Profile/About';
import Interests from './Components/Profile/Interests';

function Profile() {
  return (
    <div className='profile'>
      <br />
      <About />
      <br />
      <hr />
      <Interests /> 
      {/* Users will have the ability to display their interests for other users to see and help with gift decision making */}
      <h1 id='interestsSection' className='interests'>
        Interests
      </h1>
      <hr />
    </div>
  );
}

export default Profile;
