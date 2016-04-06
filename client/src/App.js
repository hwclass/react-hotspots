import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.querySelector('#app'));