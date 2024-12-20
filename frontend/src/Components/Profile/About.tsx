import React, { Component } from 'react';

//Components to be used below
import ProfilePhoto from '../../assets/santa.png';
// import './App.css';
import ProfileName from './ProfileName';


//Class *component* extends Component is the same as creating a function 

class About extends Component {
  render() {
    return (
      <div>
        <section id='container-about' className='container-about'>
          <h1>About Me</h1>
          <img
            src={ProfilePhoto} //passed in the ProfilePhoto as a prop
            width='180'
            height='180'
            alt='profile photo'
          />
          <h2>
            {/* Name card would populate with fetched user */}
            Hi, I'm <ProfileName />
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
            omnis veritatis! Voluptatibus dolor cum hic sint sunt dolorum,
            eveniet fugit voluptas mollitia nam qui optio reiciendis nulla
            dolorem. Nobis, voluptas.
          </p>
        </section>
      </div>
    );
  }
}
export default About;
