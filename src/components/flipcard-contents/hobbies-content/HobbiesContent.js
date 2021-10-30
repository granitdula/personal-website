import React from 'react';
import './HobbiesContent.css';
import footballIcon from '../../../resources/images/icons/football-icon.png';
import dumbellIcon from '../../../resources/images/icons/dumbell-icon.png';
import movieIcon from '../../../resources/images/icons/movie-icon.png';
import controllerIcon from '../../../resources/images/icons/controller-icon.png';

const HobbiesContent = () => {
  return (
    <div className='hobbies-content-container'>
      <div className='sub-content'>
        <h5>Football</h5>
        <img src={footballIcon}></img>
      </div>
      <div className='sub-content'>
        <h5>Excercise</h5>
        <img src={dumbellIcon}></img>
      </div>
      <div className='sub-content'>
        <h5>Movies</h5>
        <img src={movieIcon}></img>
      </div>
      <div className='sub-content'>
        <h5>Games</h5>
        <img src={controllerIcon}></img>
      </div>
    </div>
  );
}

export default HobbiesContent