import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
      <div className="hotspot" style={style.hotspot}></div>
    )
  }

}

export default Hotspot;