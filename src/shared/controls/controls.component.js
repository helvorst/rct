import React from 'react';
import Button from '../button/button.component';

export default (props) => {
  const renderItem = (item, ind) => <Button {...item} key={ind}/>;
  const renderList = (list) => list.map(renderItem);

  return <div className="controls">
    {renderList(props.controls)}
  </div>;
}