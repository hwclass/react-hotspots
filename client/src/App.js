import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './components/ProductDetail';
import { imageProps, moduleIds } from './config';

require('./stylesheets/components/app');

const _ = require('lodash');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEventSourceSupported: window.EventSource,
      moduleId: moduleIds[0],
      moduleData: null,
      selectedImage: null,
      selectedPointer: null,
    };
    if (!!this.state.isEventSourceSupported) {
      const sseUrl = `http://localhost:3000/module/${this.state.moduleId}`;
      const eventSource = new EventSource(sseUrl);
      const self = this;
      eventSource.addEventListener('message', (response) => {
        self.setState({
          moduleData: JSON.parse(response.data),
          images : JSON.parse(response.data).module.hotSpots.popups.image.imageFamily.images
        });
      }, false);
    }
  };

  getModuleId() {
    return this.state.moduleData.moduleId;
  };

  onImagePointerClick(selectedPointer) {
    this.setState({
      selectedPointer,
      selectedImage: selectedPointer,
    });
  };

  activateServerSentEvents() {
    console.log('activateServerSentEvents');
    
  }

  render() {
    //console.dir(this.state.moduleData.module.hotspots.popups.image.imageFamily.images[0]);
    const images = [
      {
        /*http://sonyglobal.scene7.com/is/image/gwtprod/93a8c28123eede1d42d33871e6553daf*/
        src: this.state.images,
        hotspots: [
          {
            top: '10%',
            left: '20%',
            tooltip: {
              title: 'Modal 1 Title',
              text: 'Some tooltip content...',
            },
          },
        ],
      },
      {
        src: 'http://sonyglobal.scene7.com/is/image/gwtprod/54c77aef97fe56422f0e6c9ba105b23a',
        hotspots: [
          {
            top: '1%',
            left: '1%',
            tooltip: {
              title: 'Modal 2 Title',
              text: 'Some tooltip content...',
            },
          },
          {
            top: '5%',
            left: '5%',
            tooltip: {
              title: 'Modal 3 Title',
              text: 'Some tooltip content...',
            },
          },
        ],
      },
    ];

    return (
      <div className="container">
        <ProductDetail
          imageProps={imageProps}
          moduleData={this.state.moduleData}
          images={images}
          selectedImage={(this.state.selectedImage === null ? images[0] : this.state.selectedImage)}
          onImagePointerClick={selectedPointer => this.onImagePointerClick(selectedPointer)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
