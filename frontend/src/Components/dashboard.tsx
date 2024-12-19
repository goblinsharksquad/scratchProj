import React from 'react';
import './dashboar.css';

const Dash = () => {
  return (
    <>
      <div className='dashboard'>
        <div className='header'>
          <h1>DASHBOARD</h1>
        </div>
      </div>
      <div className='options'>
        <div className='events'>
          <a href='#' className='item1'>
            Events
          </a>
          <p>Check out what events are baking in Santa Village. </p>
        </div>

        <div className='groups'>
          <a href='#' className='item2'>
            Groups
          </a>
          <p>Connect with other Elves and be merry.</p>
        </div>

        <div className='events'>
          <a href='#' className='item1'>
            Participants
          </a>
          <p>Check out all the other hardworking elves in Santa's Village.</p>
        </div>
      </div>
    </>
  );
};


export default Dash;