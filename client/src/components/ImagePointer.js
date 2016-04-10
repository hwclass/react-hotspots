import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ImagePointer extends Component {
	
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>{this.props.content}</div>
    )
  }

}

export default ImagePointer;