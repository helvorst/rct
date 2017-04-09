import React from 'react';

export default (props) => {
  return <div className="category-title"
              onClick={() => props.callback()}>
    {props.title}
  </div>
}