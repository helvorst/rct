import React from 'react';

export default (props) => {
  console.log(props.actions)
  return <div className="item-title"
              onClick={() => props.actions.select()}>
    {props.title}
  </div>
}