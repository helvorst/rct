import React from 'react';

export default (props) => {

//?
// <Checkbox onChange={ (value) => this.value = value } value={ this.value }

  const check = (ev) => {
    const checked = ev.target.checked;
    props.callback(checked);
  };

    return (
      <div className="checkbox-x">
        <input type="checkbox"
               value={props.value}
               checked={props.value}
               onChange={ev => check(ev)}/>
        <label>{props.label}</label>
      </div>
    )

}