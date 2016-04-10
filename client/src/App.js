import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './components/ProductDetail';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEventSourceSupported : window.EventSource,
      moduleId : 'editorial_hotspots_590359239320250140028',
      moduleData : null
    }
    
    if (!!this.state.isEventSourceSupported) {
      const eventSource = new EventSource('http://localhost:3000/module/' + this.state.moduleId);
      eventSource.addEventListener('message', (response) => {
        const moduleData = JSON.parse(response.data);
      }, false);
    } else {

    }


  }

  render () {
    return (
      <div>
        <ProductDetail moduleData={this.state.moduleData}/>
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.querySelector('#app'));