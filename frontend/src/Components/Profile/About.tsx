import React, { Component } from 'react';
import ProfilePhoto from './Profile Photo';
import './frontend/src/App.css'

class About extends Component {
  render() {
    return (
      <section id='container-about' className='container-about'>
        <h1>About Me</h1>
        <img src={ProfilePhoto} width='180' height='180' alt='profile photo' />
        <h2>
            <ul>
                {/* Name, UserName, Location would populate here*/} 
            </ul>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, omnis
          veritatis! Voluptatibus dolor cum hic sint sunt dolorum, eveniet fugit
          voluptas mollitia nam qui optio reiciendis nulla dolorem. Nobis,
          voluptas.
        </p>
      </section>
    );
  }
}

export default About;
