import React from 'react';
import './ProjectsSlideshow.css';
import SlideshowItem from '../slideshow-item/SlideshowItem.js';

class ProjectsSlideshow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='slideshow-container' style={{
        visibility: this.props.visibilityState,
        opacity: this.props.visibilityState === 'visible' ? '100%' : '0%',
        transition: 'opacity ease-in-out 500ms'
        }}>
        <SlideshowItem visibilityState={this.props.visibilityState}
                       changeVisibilityState={this.props.changeVisibilityState} />
        {/* {this.props.timelineData.items.map((data, index) => (
          <SlideshowItem/>
        ))} */}
      </div>
    );
  }
}

export default ProjectsSlideshow