import React from 'react';
import './TimelineGraph.css';
import TimelineItem from '../timeline-item/TimelineItem.js';

class TimelineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.lineBarRef = React.createRef();
    this.state = { lineBarPercent: 0, lineFillYPos: 0 };
  }

  updateLineFillYPos = () => {
    const lineFillYPixels = this.lineBarRef.current.scrollHeight * 
                            (this.state.lineBarPercent / 100);
    this.state = this.setState({ 
      lineFillYPos: this.lineBarRef.current.getBoundingClientRect().y + lineFillYPixels
    });
  }

  calculateAndUpdateLineBarPercent = () => {
    const halfWindowHeight = Math.floor(window.innerHeight / 2);
    const lineBarYOffset = this.lineBarRef.current.getBoundingClientRect().y;
    let percentCalculation = 100 * (halfWindowHeight - lineBarYOffset) / 
                             this.lineBarRef.current.scrollHeight;

    percentCalculation = percentCalculation < 0 ? 0 : percentCalculation;
    const newPercent = percentCalculation > 100 ? 100 : percentCalculation;

    this.setState({ lineBarPercent: newPercent });
  }

  updateTimelineGraph = () => {
    this.calculateAndUpdateLineBarPercent();
    this.updateLineFillYPos();
  }

  componentDidMount() { window.addEventListener('scroll', this.updateTimelineGraph); }

  render() {
    return (
      <div className='timeline-graph-container'>
        <div className='timeline-line' ref={this.lineBarRef}></div>
        {this.props.timelineData.items.map((data, index) => (
          <TimelineItem data={data} lineFillYPos={this.state.lineFillYPos} key={index}/>
        ))}
        <div className='timeline-line-filler'
             style={{ height: (this.state.lineBarPercent.toString() + '%') }}></div>
      </div>
    );
  }
}

export default TimelineGraph