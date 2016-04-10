import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require("../stylesheets/components/tooltip");

class ToolTip extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    const style = {
      tooltip : {
        top : this.props.top,
        left : this.props.left
      }
    };

    return (
      <span className="tooltip" style={style.tooltip}>
        <p>{this.props.title}</p>
        <p>{this.props.text}</p>
      </span>
    )

  }

};

export default ToolTip;