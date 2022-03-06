import React from 'react';
import './Home.css';
import profileImage from '../../../resources/images/me.jpg';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-background'>
        <div className='background-layer-1'></div>
        <div className='background-layer-2'></div>
        <div className='background-layer-3'>
          <img src={profileImage} alt='#'></img>
        </div>
      </div>
      <h1>Hi, I'm Granit</h1>
      <h3>Welcome to my portfolio page.</h3>
    </div>
  );
}

export default Home