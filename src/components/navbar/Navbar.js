import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-title'>Granit Dula</div>
      <div className='navlinks-container'>
          <a href='#' className='nav-link'>About</a>
          <a href='#' className='nav-link'>Timeline</a>
          <a href='#' className='nav-link'>Projects</a>
          <a href='#' className='nav-link'>Contact</a>
      </div>
      <div className='burger-menu'></div>
    </nav>
  );
}

export default Navbar
