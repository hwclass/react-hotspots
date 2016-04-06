import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from './ImageContainer';

require("../stylesheets/components/productDetail");

class ProductDetail extends Component {

	constructor (props) {
    super(props);
  }

  render () {
    
    const images = [
      'http://img1.aksam.com.tr/imgsdisk/2013/05/02/020520130142252644239.jpg',
      'https://pbs.twimg.com/profile_images/2663032040/98a9760062396c8a8eca551f41e5b078_400x400.png',
      'http://www.coolwallpapers.org/wallpapers/6/661/thumb/200_beaver-05.jpg'
    ];

    return (
      <div className='product-detail'>
        Product Detail Section
        <ImageContainer key={Math.random(Date.now() * 100)} images={images}/>
      </div>
    )
    
  }

}

export default ProductDetail;