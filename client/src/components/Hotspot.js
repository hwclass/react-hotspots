import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ToolTip from './ToolTip';

require("../stylesheets/components/hotspot");

class Hotspot extends Component {

  constructor (props) {
    super(props);
    this.state = {
      activatedTooltip : false
    }
  }

  onClickHandler () {
    this.setState({activatedTooltip : !this.state.activatedTooltip});
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
          onClick={() => {this.onClickHandler()}}></div>
          { !!this.state.activatedTooltip ? <ToolTip title={this.props.tooltip.title} text={this.props.tooltip.text} top={style.hotspot.top} left={style.hotspot.left}/> : null }
      </span>
    )
  }

}

export default Hotspot;