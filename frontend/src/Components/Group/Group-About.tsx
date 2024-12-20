import React, { Component } from 'react';
import GroupPP from './Group-Profile Photo';
// import '.App.css';
import GroupName from './GroupName';

class GroupAbout extends Component {
  render() {
    return (
      <section id='container-about' className='container-about'>
        <h1>
          Meet the <GroupName />{' '}
        </h1>
        <GroupPP />
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

export default GroupAbout;
