import React  from 'react';
import './header.css';

export default (props) => {
  return (
    <div className="header">
      <h1>
        {props.title} add
      </h1>
    </div>
  )
}