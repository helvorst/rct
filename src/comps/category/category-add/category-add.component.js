import React from 'react';
import InputBtn from '../../../shared/input-button/input-button.component';


export default (props) => {

  const add = (value) => {
    const category = {
      name: value,
      parent: null,
      id: props.categories.length
    };
    props.categories.unshift(category);
    props.actions.setCategories(props.categories);
  };

  return (
    <div>
      <InputBtn
        callback={add}
        placeholder="Add category"/>
    </div>
  )
}