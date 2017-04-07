import React from 'react';
import InputBtn from '../../../shared/input-button/input-button.component';


export default (props) => {

  const add = (value) => {
    const todo = {
      name: value,
      category: props.category.id,
      description: '',
      id: props.todos.length
    }
    props.todos.unshift(todo);
    props.actions.setTodods(props.todos);
  };

  return (
    <div>
      <InputBtn
        callback={add}
        placeholder="Add todo"/>
    </div>
  )
}