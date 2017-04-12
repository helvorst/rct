import React from 'react';
import './split.styles.css';

export default (props) => {
  return (
    <div className="row split">
      <div className="col-sm-6 split-pane">{props.left}</div>
      <div className="col-sm-6 split-pane">{props.right}</div>
    </div>
  )
}