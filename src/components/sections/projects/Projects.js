import React from 'react';
import './Projects.css';
import { ReactComponent as ProjectCloudSvg } from '../../../resources/images/section-images/project-cloud.svg';

class Projects extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='projects-container'>
        <h1>Projects</h1>
        <ProjectCloudSvg viewBox='0 0 320 250'/>
      </div>
    );
  }
}

export default Projects