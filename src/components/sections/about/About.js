import React from 'react';
import './About.css';
import Flipcard from '../../flipcard/Flipcard';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-background'>
        <h1>About</h1>
        <div className='flipcards-container'>
          <Flipcard title='' content={''}/>
          <Flipcard title='' content={''}/>
          <Flipcard title='' content={''}/>
          <Flipcard title='' content={''}/>
        </div>
      </div>
    </div>
  );
}

export default About