import React from 'react';
import Input from '../input/input.component';
import Button from '../button/button.component';

let value = '';
export default (props) => {
  const btn = {
    name: 'add',
    classesA: 'btn btn-primary',
    callback: () => props.callback(value)
  };

  return (
    <div className="input-group">
      <Input placeholder={props.placeholder}
             value={value}
             callback={(val) => value = val }/>
      <span className="input-group-btn">
            <Button {...btn}/>
      </span>
    </div>

  )
}