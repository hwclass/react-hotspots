import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require("../stylesheets/components/productDetail");

class ProductDetail extends Component {

	constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='product-detail'>Product Detail Section</div>
    )
  }

}

export default ProductDetail;