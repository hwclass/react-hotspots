import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../stylesheets/components/tooltip');

class ToolTip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screenWidth: screen.width
    }
  }

  calculatePosition() {
    return ((screen.width * this.props.left.split('%')[0]) / 100) + parseInt(this.props.hotspotWidth);
  }

  render() {

    const style = {
      tooltip : {
        top : this.props.top,
        left : this.calculatePosition()
      }
    };

    return (
      <span 
        key={this.props.key}
        className="tooltip" 
        style={style.tooltip}>
        <p>{this.props.title}</p>
        <p>{this.props.text}</p>
        <p>{this.calculatePosition()}</p>
      </span>
    )

  }

};

export default ToolTip;