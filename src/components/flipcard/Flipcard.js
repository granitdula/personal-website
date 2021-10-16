import React from 'react';
import './Flipcard.css';

class Flipcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contentToggled: false };
  }

  handleFlipcardClick = () => { this.setState({ contentToggled: !this.state.contentToggled }); }

  render() {
    return (
      <div className='flipcard-container' onClick={this.handleFlipcardClick}>
        <div className={this.state.contentToggled ? 'flipcard-front show-content' :
                        'flipcard-front'}>
          <h3>{this.props.title}</h3>
        </div>
        <div className={this.state.contentToggled ? 'flipcard-back show-content' :
                        'flipcard-back'}>
          <h4>{this.props.title}</h4>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Flipcard