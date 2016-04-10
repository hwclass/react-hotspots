import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hotspot from './Hotspot';

require("../stylesheets/components/image");

class Image extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    const hotspots = this.props.hotspots.map((hotspot) => {
      return <Hotspot key={Math.random(Date.now() * 100)} top={hotspot.top} left={hotspot.left} tooltip={hotspot.tooltip}/>
    });

    return (
      <div className="image-wrapper">
        <img src={this.props.src}/>
        {hotspots}
      </div>
    )
  }

}

export default Image;