import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './components/ProductDetail';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEventSourceSupported : window.EventSource,
      moduleId : 'editorial_hotspots_590359239320250140028',
      moduleData : null,
      selectedImage : null,
      selectedPointer : null
    }
    
    if (!!this.state.isEventSourceSupported) {
      const eventSource = new EventSource('http://localhost:3000/module/' + this.state.moduleId);
      eventSource.addEventListener('message', (response) => {
        const moduleData = JSON.parse(response.data);
      }, false);
    } else {

    }
  }

  componentWillMount () {
    this.state = {
      isEventSourceSupported : window.EventSource,
      moduleId : 'editorial_hotspots_590359239320250140028',
      moduleData : null,
      selectedImage : null,
      selectedPointer : null
    }
  }

  onImagePointerClick (selectedPointer) {
    this.setState({
      selectedPointer,
      selectedImage : selectedPointer 
    })
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
              title : 'Modal 1 Title',
              text : 'Some tooltip content...'
            }
          }
        ]
      },
      {
        src: 'http://sonyglobal.scene7.com/is/image/gwtprod/54c77aef97fe56422f0e6c9ba105b23a?fmt=jpeg',
        hotspots : [
          {
            top: '32%',
            left: '2%',
            tooltip : {
              title : 'Modal 2 Title',
              text : 'Some tooltip content...'
            }
          },
          {
            top: '24%',
            left: '33%',
            tooltip : {
              title : 'Modal 3 Title',
              text : 'Some tooltip content...'
            }
          }
        ]
      }
    ];

    return (
      <div>
        <ProductDetail 
          moduleData={this.state.moduleData}
          images={images}
          selectedImage={(this.state.selectedImage===null?images[0]:this.state.selectedImage)}
          onImagePointerClick={selectedPointer => this.onImagePointerClick(selectedPointer)}/>
      </div>
    )

  }

}

ReactDOM.render(<App/>, document.querySelector('#app'));