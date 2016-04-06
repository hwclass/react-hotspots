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
      console.dir(hotspot);
      return <Hotspot key={Math.random(Date.now() * 100)} top={hotspot.top} left={hotspot.left}/>;
    });

    return (
      <div className="image-wrapper">
        Image
        <img src={this.props.src}/>
        {hotspots}
      </div>
    )
  }

}

export default Image;