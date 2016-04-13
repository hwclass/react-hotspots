import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hotspot from './Hotspot';

require('../stylesheets/components/image');

class Image extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const hotspots = this.props.hotspots.map((hotspot) => {
      return <Hotspot key={Math.random(Date.now() * 100)} top={hotspot.top} left={hotspot.left} tooltip={hotspot.tooltip}/>
    });

    const src = this.props.src,
          imageProps = this.props.imageProps;

    const actualSrc = {
      desktop : {
        standard : src + imageProps.queries.desktop,
        highRes : src + imageProps.queries.highRes.desktop + '\ ' + '2x',
        fullRes : src + imageProps.queries.highRes.desktop + '\ ' + '3x'
      },
      tablet : {
        standard : src + imageProps.queries.tablet,
        highRes : src + imageProps.queries.highRes.tablet + '\ ' + '2x',
        fullRes : src + imageProps.queries.highRes.tablet + '\ ' + '3x'
      },
      phone : {
        standard : src + imageProps.queries.phone,
        highRes : src + imageProps.queries.highRes.phone + '\ ' + '2x',
        fullRes : src + imageProps.queries.highRes.phone + '\ ' + '3x'
      }
    };

    const srcSets = {
      desktop : actualSrc.desktop.standard + ',' + '\n' +
              actualSrc.desktop.highRes + ',' + '\n' +
              actualSrc.desktop.fullRes,
      tablet : actualSrc.tablet.standard + ',' + '\n' +
              actualSrc.tablet.highRes + ',' + '\n' +
              actualSrc.tablet.fullRes,
      phone : actualSrc.phone.standard + ',' + '\n' +
              actualSrc.phone.highRes + ',' + '\n' +
              actualSrc.phone.fullRes
    };

    return (
      <div className="image-wrapper">
        <picture width="100%">
          <source 
            media="(min-width: 960px)"
            srcSet={srcSets.desktop}/>
          <source 
            media="(min-width: 480px)"
            srcSet={srcSets.tablet}/>
          <img 
            src={actualSrc.phone.standard}
            srcSet={srcSets.phone}/>
        </picture>
        {hotspots}
      </div>
    );
    
  }

}

export default Image;