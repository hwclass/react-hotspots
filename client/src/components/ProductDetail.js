import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from './ImageContainer';
import ImagePointerContainer from './ImagePointerContainer';

require("../stylesheets/components/productDetail");

class ProductDetail extends Component {

	constructor (props) {
    super(props);
  }

  render () {
    
    const images = [
      {
        src: 'http://sonyglobal.scene7.com/is/image/gwtprod/93a8c28123eede1d42d33871e6553daf?fmt=jpeg',
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
        src: 'http://sonyglobal.scene7.com/is/image/gwtprod/93a8c28123eede1d42d33871e6553daf?fmt=jpeg',
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
      }
    ];

    return (
      <div className='product-detail'>
        <ImageContainer key={Math.random(Date.now() * 100)} images={images}/>
        <ImagePointerContainer key={Math.random(Date.now() * 100)} images={images}/>
      </div>
    )

  }

}

export default ProductDetail;