import React from 'react';
import './Navbar.css';
import * as Scroll from 'react-scroll';

class Navbar extends React.Component {
  constructor() {
    super();
    
    // pixel width at which it toggles burger off.
    this.NAVBAR_TRIGGER_SIZE = 720;
    this.navbarRef = React.createRef();
    this.state = { burgerToggle: false, scroller: Scroll.scroller };
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
      <div id='nav-container'>
        <nav className='navbar' ref={this.navbarRef}>
          <div className='navbar-title' onClick={() => {
            this.toggleBurgerOff();
            this.state.scroller.scrollTo('home', {
              duration: 1000,
              smooth: true,
              offset: -this.navbarRef.current.clientHeight,
            })
          }}>Granit Dula</div>
          <div className='navlinks-container'>
              <a className='nav-link' onClick={() => {this.state.scroller.scrollTo('about', {
                duration: 1000,
                smooth: true,
                offset: -this.navbarRef.current.clientHeight,
              })}}>About</a>
              <a className='nav-link' onClick={() => {this.state.scroller.scrollTo('timeline', {
                duration: 1000,
                smooth: true,
                offset: -this.navbarRef.current.clientHeight,
              })}}>Timeline</a>
              <a className='nav-link' onClick={() => {this.state.scroller.scrollTo('projects', {
                duration: 1000,
                smooth: true,
                offset: -this.navbarRef.current.clientHeight,
              })}}>Projects</a>
              <a className='nav-link' onClick={() => {this.state.scroller.scrollTo('contact', {
                duration: 1000,
                smooth: true,
                offset: -this.navbarRef.current.clientHeight,
              })}}>Contact</a>
          </div>
          <div className='burger-menu' onClick={this.handleBurgerClick}>
            <span className={this.state.burgerToggle ? 'burger-line-rotate-top' : 
                            'burger-menu-line'}></span>
            <span className={this.state.burgerToggle ? 'burger-line-invisible' : 
                            'burger-menu-line'}></span>
            <span className={this.state.burgerToggle ? 'burger-line-rotate-bottom' : 
                            'burger-menu-line'}></span>
          </div>
          <div className={this.state.burgerToggle ? 'navbar-dropdown' : 'navbar-dropdown-off'}>
            <a className='nav-link' onClick={() => {
              this.toggleBurgerOff();
              this.state.scroller.scrollTo('about', {
                duration: 1000,
                smooth: true,
              });
            }}>About</a>
            <a className='nav-link' onClick={() => {
              this.toggleBurgerOff();
              this.state.scroller.scrollTo('timeline', {
                duration: 1000,
                smooth: true,
              });
            }}>Timeline</a>
            <a className='nav-link' onClick={() => {
              this.toggleBurgerOff();
              this.state.scroller.scrollTo('projects', {
                duration: 1000,
                smooth: true,
              });
            }}>Projects</a>
            <a className='nav-link' onClick={() => {
              this.toggleBurgerOff();
              this.state.scroller.scrollTo('contact', {
                duration: 1000,
                smooth: true,
              });
            }}>Contact</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar
