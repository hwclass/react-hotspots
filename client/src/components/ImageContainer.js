import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';

require("../stylesheets/components/imageContainer");

class ImageContainer extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    const images = this.props.images.map((image) => {
      return <Image key={Math.random(Date.now() * 100)} src={image.src} hotspots={image.hotspots}/>;
    });

    return (
      <div>
        <div key={this.props.key} className="image-container"></div>
        {images}
      </div>
    ) 
  }

}

export default ImageContainer;