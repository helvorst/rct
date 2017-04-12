import React  from 'react';
import Checkbox from '../checkbox/checkbox.component';
import Input from '../input/input.component';
import './search.styles.less';

let value ='';
let checked = false;

export default (props) => {


  const search = () => props.callback({value: value, done: checked});

  return (
    <div className="search-component">
      <Checkbox label="Show done"
                value={checked}
                callback={val => {checked = val; search()}}/>
      <Input value={value}
             placeholder="Search"
             callback={val => {value = val; search()}}/>

    </div>
  )
}
