import React from 'react';

const Input = (props) => {
    return <input
      className="form-control"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(ev) => props.callback(ev.target.value)}/>

};
export default Input;
