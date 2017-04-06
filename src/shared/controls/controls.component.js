import React from 'react';
import Button from '../button/button.component';
import './controls.styles.css';

export default (props) => {
  const renderItem = (item, ind) => <Button description={item} key={ind}/>;
  const renderList = (list) => list.map(renderItem);

  return <div className="controls">
    {renderList(props.controls)}
  </div>;
}