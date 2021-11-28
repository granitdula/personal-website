import React from 'react';
import './Timeline.css';
import TimelineGraph from '../../visualisations/timeline-graph/TimelineGraph.js';
import timelineData from '../../../resources/component-data/timeline-data.json';

class Timeline extends React.Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div className='timeline-container'>
        <h1>Timeline</h1>
        <h3>A timeline of my experience of Computer Science during my education.</h3>
        <TimelineGraph timelineData={timelineData}/>
      </div>
    );
  }
}

export default Timeline