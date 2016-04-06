import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './components/ProductDetail';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      some : 'some state'   
    }
  }

  render () {
    return (
      <div>
        Hello Papa! state : {this.state.some}
        <ProductDetail/>
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.querySelector('#app'));