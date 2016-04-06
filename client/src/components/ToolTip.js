import React, {Component} from 'react';
import ReactDOM from 'react-dom';

require("../stylesheets/components/tooltip");

var ToolTip = (props) => {
  return (
    <div className="tooltip">
      <p>{props.title}</p>
      <p>{props.body}</p>
    </div>
  )
};

export default ToolTip;