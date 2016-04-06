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
      console.dir(image);
      return <Image key={Math.random(Date.now() * 100)} src={image}/>;
    });

    return (
      <div>
        <div key={this.props.key} className="image-container">Image Container</div>
        <p>
          {images}
        </p>
      </div>
    ) 
  }

}

export default ImageContainer;