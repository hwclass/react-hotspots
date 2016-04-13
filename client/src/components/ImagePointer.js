import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../stylesheets/components/imagePointer');

const ImagePointer = ({pointer, counter, content, onImagePointerClick}) => {
  return (
    <div className="image-pointer" onClick={() => onImagePointerClick(pointer)}>
      <span className="fa-stack fa-lg">
          <i className="fa fa-circle-thin fa-stack-2x"></i>
          <i className="fa fa-stack-1x">
          	<span className="counter">{counter}</span>
          </i>
        </span>
      {content}
    </div>
  )
}

export default ImagePointer;

