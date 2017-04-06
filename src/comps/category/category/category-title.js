import React from 'react';

export default (props) => {
  return <div className="item-title"
              onClick={() => props.callback()}>
    {props.title}
  </div>
}