import React from 'react';
import './Projects.css';
import { ReactComponent as ProjectCloudSvg } from '../../../resources/images/section-images/project-cloud.svg';
import ProjectsSlideshow from '../../projects-slideshow/ProjectsSlideshow';
import slideshowData from '../../../resources/component-data/project-slideshow-data.json';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = { slideshowVisibilityState: 'hidden' };
  }

  changeVisibilityState = () => {
    this.setState({ slideshowVisibilityState: this.state.slideshowVisibilityState === 'visible' ? 'hidden' : 'visible' });
  }

  render() {
    return (
      <div className='projects-container'>
        <h1>Projects</h1>
        <ProjectCloudSvg viewBox='0 0 320 250' onClick={this.changeVisibilityState}/>
        <ProjectsSlideshow visibilityState={this.state.slideshowVisibilityState}
                           changeVisibilityState={this.changeVisibilityState}
                           slideshowData={slideshowData}/>
      </div>
    );
  }
}

export default Projects