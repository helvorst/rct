import React  from 'react';
import Checkbox from '../checkbox/checkbox.component';
import Input from '../input/input.component';
import './search.styles.less';
import {connect} from 'react-redux';
import {setFilter} from '../../actions';

let value ='';
let checked = false;

export default connect(state=>({filter: state.filter}))((props) => {


  const search = () => props.dispatch(setFilter({search: value, done: checked}));

  return (
    <div className="search-component">
      <Checkbox label="Show done"
                value={props.filter.done}
                callback={val => {checked = val; search()}}/>
      <Input value={props.filter.search}
             placeholder="Search"
             callback={val => {value = val; search()}}/>

    </div>
  )
})
