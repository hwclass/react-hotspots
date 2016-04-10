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
      },
      toolTip : {
        top : this.props.top,
        left : this.props.left
      }
    };

    const toolTipStyle = {

    }

    return (
      <div>
        <div 
          className="hotspot-module"
          onClick={() => {this.onClickHandler()}}>
            <span className="hspot-outer" style={style.hotspot}>
              <span className="hspot-core">
                <span className="icons">
                  <i className="fa fa-plus"></i>
                </span>
              </span>
            </span>
          </div>
          { !!this.state.activatedTooltip ? <ToolTip title={this.props.tooltip.title} text={this.props.tooltip.text} top={style.toolTip.top} left={style.toolTip.left}/> : null }
      </div>
    )
  }

}

export default Hotspot;