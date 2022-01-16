import React from 'react';
import './SlideshowItem.css';
import { ReactComponent as RightArrowSvg } from '../../resources/images/section-images/right-arrow.svg';
import { ReactComponent as LeftArrowSvg } from '../../resources/images/section-images/left-arrow.svg';

class SlideshowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='slideshow-item-container' style={{
        visibility: this.props.visibilityState,
        opacity: this.props.visibilityState === 'visible' ? '100%' : '0%',
        transition: 'opacity ease-in-out 500ms'
        }}>
        <div className='slideshow-content'>
          <div className='exit-button' onClick={ this.props.changeVisibilityState }>
            <div id='line-1'></div>
            <div id='line-2'></div>
          </div>
          <div className='content-container'>
            <div className='text-block'>
              <h1>Title</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur adipiscing.</p>
              <a href='#'>Link</a>
            </div>
            <img src='' alt='#'></img>
          </div>
        </div>
        <LeftArrowSvg className='left-arrow-svg'/>
        <RightArrowSvg className='right-arrow-svg'/>
        <div className='slide-number'>1</div>
      </div>
    );
  }
}

export default SlideshowItem