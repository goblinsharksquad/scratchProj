import React, { Component } from 'react';
import ProfilePhoto from '../../assets/santa.png';
import './frontend/src/App.css';

class About extends Component {
  render() {
    return (
      <div>
        <section id='container-about' className='container-about'>
          <h1>About Me</h1>
          <img
            src={ProfilePhoto}
            width='180'
            height='180'
            alt='profile photo'
          />
          <h2>Hi, I'm {name}</h2>
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
