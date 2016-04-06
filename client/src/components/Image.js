import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require("../stylesheets/components/image");

class Image extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <img className="image" src={this.props.src}/>
    )
  }

}

export default Image;