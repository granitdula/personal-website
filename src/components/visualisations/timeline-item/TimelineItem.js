import React from 'react';
import './TimelineItem.css';
import { LIGHTGREY, PALEORANGE } from '../../../constants/Colours.js';

class TimelineItem extends React.Component {
  constructor(props) {
    super(props);
    this.nodeRef = React.createRef();
    this.state = { nodeColour: LIGHTGREY };
  }

  componentDidMount() {
    this.updateNodeColour();

    window.addEventListener('scroll', this.updateNodeColour);
  }

  updateNodeColour = () => {
    const nodeYOffset = this.nodeRef.current.getBoundingClientRect().y;
    this.setState({ nodeColour: this.props.lineFillYPos > nodeYOffset ? 
                    PALEORANGE : LIGHTGREY });
  }

  render() {
    return (
      <div className='timeline-item-container'>
        <div className='timeline-item-content'>
          <span className='tag' style={{ background: this.props.data.category.colour }}>
            { this.props.data.category.tag }
          </span>
          <time>{ this.props.data.date }</time>
          <p>{ this.props.data.text }</p>
          <span className='timeline-node' 
                style={{ borderColor: this.state.nodeColour }} 
                ref={this.nodeRef}></span>
        </div>
      </div>
    );
  }
}

export default TimelineItem