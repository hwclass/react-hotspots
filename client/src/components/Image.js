import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require("../stylesheets/components/image");

class Image extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <span>
        Image
        <img src={this.props.src}/>
      </span>
    )
  }

}

export default Image;