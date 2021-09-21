import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor() {
    super();
    
    // pixel width at which it toggles burger off.
    this.NAVBAR_TRIGGER_SIZE = 720;
    this.state = { burgerToggle: false };
  }

  handleBurgerClick = () => { this.setState({ burgerToggle: !this.state.burgerToggle }); };
  toggleBurgerOff = () => { this.setState({ burgerToggle: false }); };

  handleWindowResize = () => {
    if (window.innerWidth > this.NAVBAR_TRIGGER_SIZE) { this.toggleBurgerOff(); }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-title'>Granit Dula</div>
        <div className='navlinks-container'>
            <a href='#' className='nav-link'>About</a>
            <a href='#' className='nav-link'>Timeline</a>
            <a href='#' className='nav-link'>Projects</a>
            <a href='#' className='nav-link'>Contact</a>
        </div>
        <button className='burger-menu' onClick={this.handleBurgerClick}>
          <span className={this.state.burgerToggle ? 'burger-line-rotate-top' : 
                           'burger-menu-line'}></span>
          <span className={this.state.burgerToggle ? 'burger-line-invisible' : 
                           'burger-menu-line'}></span>
          <span className={this.state.burgerToggle ? 'burger-line-rotate-bottom' : 
                           'burger-menu-line'}></span>
        </button>
        <div className={this.state.burgerToggle ? 'navbar-dropdown' : 'navbar-dropdown-off'}>
          <a href='#' className='nav-link' onClick={this.toggleBurgerOff}>About</a>
          <a href='#' className='nav-link' onClick={this.toggleBurgerOff}>Timeline</a>
          <a href='#' className='nav-link' onClick={this.toggleBurgerOff}>Projects</a>
          <a href='#' className='nav-link' onClick={this.toggleBurgerOff}>Contact</a>
        </div>
      </nav>
    );
  }
}

export default Navbar
