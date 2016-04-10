import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImagePointer from './ImagePointer';

require("../stylesheets/components/imagePointerContainer");

class ImagePointerContainer extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    const imagePointers = this.props.images.map((image) => {
      return <ImagePointer key={Math.random(Date.now() * 100)} content="asdasd"/>;
    })

    return (
      <div>
        <div key={this.props.key} className="image-pointer-container"></div>
        {imagePointers}
      </div>
    ) 
  }

}

export default ImagePointerContainer;