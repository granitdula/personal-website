import React from 'react';
import './SlideshowItem.css';

class SlideshowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='slideshow-item-container'>
        <div className='slideshow-content' style={{
          opacity: this.props.currSlideIndex === this.props.index + 1 ? '100%' : '0%',
          transition: this.props.currSlideIndex === this.props.index + 1 ? 'opacity linear 1200ms' : 'opacity linear 300ms',
          zIndex: this.props.currSlideIndex === this.props.index + 1 ? '1' : '0',
          height: this.props.currSlideIndex === this.props.index + 1 ? '32em' : '0'
        }}>
          <div className='exit-button' onClick={ this.props.changeVisibilityState }>
            <div id='line-1'></div>
            <div id='line-2'></div>
          </div>
          <div className='content-container'>
            <div className='text-block'>
              <h1>{this.props.data.title}</h1>
              <p>{this.props.data.description}</p>
              <div className='link-container'>
                <a href={this.props.data.linkUrl} target='_blank'>{this.props.data.linkText}</a>
              </div>
            </div>
            <img src='' alt='#'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideshowItem