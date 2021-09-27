import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-background'>
        <div className='background-layer-1'>
          <h1>Hi, I'm Granit</h1>
          <h3>Welcome to my portfolio page.</h3>
        </div>
        <div className='background-layer-2'></div>
        <div className='background-layer-3'>
          <img src='' alt='#'></img> {/* TODO: Add an image here. */}
        </div>
      </div>
    </div>
  );
}

export default Home