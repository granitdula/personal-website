import React from 'react';
import './ProjectsSlideshow.css';
import SlideshowItem from '../slideshow-item/SlideshowItem.js';
import { ReactComponent as RightArrowSvg } from '../../resources/images/section-images/right-arrow.svg';
import { ReactComponent as LeftArrowSvg } from '../../resources/images/section-images/left-arrow.svg';

class ProjectsSlideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 1 }
  }

  incrementSlideIndex = () => {
    const numberOfPages = this.props.slideshowData.items.length;

    if (this.state.slideIndex + 1 > numberOfPages) { this.setState({ slideIndex: 1 }); }
    else { this.setState({ slideIndex: this.state.slideIndex + 1 }); }
  }

  decrementSlideIndex = () => {
    const numberOfPages = this.props.slideshowData.items.length;

    if (this.state.slideIndex - 1 < 1) { this.setState({ slideIndex: numberOfPages }); }
    else { this.setState({ slideIndex: this.state.slideIndex - 1 }); }
  }

  changeSlide(isForward) {
    isForward ? this.incrementSlideIndex() : this.decrementSlideIndex();
  }

  render() {
    return (
      <div className='slideshow-container' style={{
        visibility: this.props.visibilityState,
        opacity: this.props.visibilityState === 'visible' ? '100%' : '0%',
        transition: 'opacity ease-in-out 500ms'
        }}>
        {this.props.slideshowData.items.map((data, index) => {
            return (
              <SlideshowItem visibilityState={this.props.visibilityState}
                             changeVisibilityState={this.props.changeVisibilityState}
                             data={data}
                             currSlideIndex={this.state.slideIndex}
                             index={index}
                             key={index}/>
            );
        })}
        <LeftArrowSvg className='left-arrow-svg' onClick={() => this.changeSlide(false)}/>
        <RightArrowSvg className='right-arrow-svg' onClick={() => this.changeSlide(true)}/>
        <div className='slide-number'>{this.state.slideIndex + '/' + this.props.slideshowData.items.length}</div>
      </div>
    );
  }
}

export default ProjectsSlideshow