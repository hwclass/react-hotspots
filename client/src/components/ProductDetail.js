import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from './ImageContainer';
import ImagePointerContainer from './ImagePointerContainer';

require('font-awesome/scss/font-awesome.scss');
require("../stylesheets/components/productDetail");

class ProductDetail extends Component {

	constructor (props) {
    super(props);
  }

  render () {

    return (
      <div className='product-detail'>
        <ImageContainer 
          key={Math.random(Date.now() * 100)} 
          images={this.props.images}
          selectedImage = {this.props.selectedImage}/>
        <ImagePointerContainer 
          key={Math.random(Date.now() * 1000)} 
          images={this.props.images}
          selectedImage = {this.props.selectedImage}
          onImagePointerClick={this.props.onImagePointerClick}/>
      </div>
    )

  }

}

export default ProductDetail;