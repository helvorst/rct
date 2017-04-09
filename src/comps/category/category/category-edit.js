import React from 'react';
import Input from '../../../shared/input/input.component';
export default (props) => {

  return (
    <div className="category-title">
      <Input value={props.title}
             callback={props.callback}/>
    </div>
  )
}