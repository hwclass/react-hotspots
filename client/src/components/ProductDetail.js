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
      {
        src: 'http://img1.aksam.com.tr/imgsdisk/2013/05/02/020520130142252644239.jpg',
        hotspots : [
          {
            top: '10%',
            left: '20%',
            tooltip : {
              title : 'Modal Title',
              text : 'Some tooltip content...'
            }
          }
        ]
      },
      {
        src: 'https://pbs.twimg.com/profile_images/2663032040/98a9760062396c8a8eca551f41e5b078_400x400.png',
        hotspots : [
          {
            top: '32%',
            left: '2%',
            tooltip : {
              title : 'Modal Title',
              text : 'Some tooltip content...'
            }
          },
          {
            top: '24%',
            left: '33%',
            tooltip : {
              title : 'Modal Title',
              text : 'Some tooltip content...'
            }
          }
        ]
      },
      {
        src: 'http://www.coolwallpapers.org/wallpapers/6/661/thumb/200_beaver-05.jpg',
        hotspots : [
          {
            top: '24%',
            left: '21%',
            tooltip : {
              title : 'Modal Title',
              text : 'Some tooltip content...'
            }
          }
        ]
      },
      {
        src: 'http://www.infoanimales.com/wp-content/uploads/2014/08/Informacion-sobre-el-Castor-Americano-300x250.jpg',
        hotspots : [
          {
            top: '55%',
            left: '86%',
            tooltip : {
              title : 'Modal Title',
              text : 'Some tooltip content...'
            }
          }
        ]
      }
    ];

    return (
      <div className='product-detail'>
        <ImageContainer key={Math.random(Date.now() * 100)} images={images}/>
      </div>
    )

  }

}

export default ProductDetail;