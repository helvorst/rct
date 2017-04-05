import React from 'react';

export default (props) => {
  return <div className="item-title">
    <input className="form-control"
           type="text"
           value={props.title}
           onChange={(ev) => this.nameChangeHandler(ev)}
    />
  </div>
}