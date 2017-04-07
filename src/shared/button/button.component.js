import React from 'react';

export default (props) => {
  return (
    <a className={props.classesA}
       onClick={() => props.callback()}>
      {props.classesA ? props.name.toUpperCase() : null}
      <i className={props.classesI}></i>
    </a>
  );
}