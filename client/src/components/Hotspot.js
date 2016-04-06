import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require("../stylesheets/components/hotspot");

class Hotspot extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    const styles = {
      top : {top : this.props.top},
      left : {left : this.props.left}
    };

    return (
      <div className="hotspot" style={styles.top, styles.left}>Hotspot</div>
    )
  }

}

export default Hotspot;