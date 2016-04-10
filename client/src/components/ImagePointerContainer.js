import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImagePointer from './ImagePointer';

require("../stylesheets/components/imagePointerContainer");

const ImagePointerContainer = (props) => {

  const imagePointers = props.images.map((pointer, index) => {
    return <ImagePointer 
              key={Math.random(Date.now() * 100)}
              pointer={pointer}
              counter={++index} 
              content="İnce ve zarif"
              onImagePointerClick={props.onImagePointerClick}/>;
  })

  return (
    <div>
      <div key={props.key} className="image-pointer-container">
        {imagePointers}
      </div>
    </div>
  )

}

export default ImagePointerContainer;