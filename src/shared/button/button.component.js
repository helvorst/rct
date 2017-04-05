import React from 'react';

export default (props) => {
  return <a onClick={() => props.description.handler()}>
    <i className={props.description.classes}></i>
  </a>;
}