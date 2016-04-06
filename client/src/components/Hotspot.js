import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ToolTip from './ToolTip';

require("../stylesheets/components/hotspot");

class Hotspot extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    const style = {
      hotspot : {
        top : this.props.top,
        left : this.props.left
      }
    };

    return (
      <span>
        <div className="hotspot" style={style.hotspot} onMouseOver={() => {console.log('on mouse over.')}}></div>
        <ToolTip title={this.props.tooltip.title} text={this.props.tooltip.text}/>
      </span>
    )
  }

}

export default Hotspot;