import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ToolTip from './ToolTip';

require("../stylesheets/components/hotspot");

class Hotspot extends Component {

  constructor (props) {
    super(props);
    this.state = {
      onMouseOver : false
    }
  }

  onMouseOver () {
    this.setState({onMouseOver : true});
  }

  onMouseOut () {
    this.setState({onMouseOver : false});
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
        <div 
          className="hotspot" 
          style={style.hotspot} 
          onMouseOver={() => { this.onMouseOver(); }}
          onMouseOut={() => { this.onMouseOut(); }}></div>
          { !!this.state.onMouseOver ? <ToolTip title={this.props.tooltip.title} text={this.props.tooltip.text} top={style.hotspot.top} left={style.hotspot.left}/> : null }
      </span>
    )
  }

}

export default Hotspot;