import React from 'react';

export default (props) => {
    return <input
      className="form-control"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(ev) => props.callback(ev.target.value)}/>

}
