import React from 'react';
// import './dashboar.css';
// import { createGroup } from '../backend/controllers/groupController.js';
// import './App.css';
//maybe import the backend router handler function for onclicks?

//Chris please update with your pseudoCode to the best of your ability



function dash() {
    return (
        <div>
        <div className='dashboard'>
          <div className='header'>
            <h1>DASHBOARD</h1>
          </div>
        </div>
        <div className='options'>
          <div className='events'>
            <a href='#' className='item'>
              Events
            </a>
            <p>Check out what events are baking in Santa Village. </p>
          </div>

          {/* <div className='groups' onClick={createGroup}> */}
            <a href='#' className='item'>
              Groups
            </a>
            <p>Connect with your fellow Elves and be merry.</p>
          </div>

          <div className='events'>
            <a href='#' className='item'>
              Participants
            </a>
            <p>Check out all the other hardworking elves in Santa's Village.</p>
          </div>
        </div>
    );
  }


export default dash;
