import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import ImagePointer from './ImagePointer';

require('../stylesheets/components/imageContainer');

class ImageContainer extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <div key={Math.random(Date.now() * 100)} className="image-container"></div>
        <Image imageProps={this.props.imageProps} key={Math.random(Date.now() * 100)} src={this.props.selectedImage.src} hotspots={this.props.selectedImage.hotspots}/>
      </div>
    ) 
  };

};

export default ImageContainer;