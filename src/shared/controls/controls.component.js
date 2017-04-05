import React from 'react';
import Button from '../button/button.component';

export default (props) => {
  const renderItem = (item, ind) => <Button description={item} key={ind}/>;
  const renderList = (list) => list.map(renderItem);

  return <div className="controls">
    {renderList(props.controls)}
     {/*<a onClick={() => this.enterEditHandler(x)}><i className="fa fa-edit"></i></a>*/}
    {/*<a onClick={() => this.props.actions.onDelete(x)}><i className="fa fa-trash-o"></i></a>*/}
    {/*<a onClick={() => this.addSubcategoryHandler(x)}><i className="fa fa-plus"></i></a>*/}
  </div>;
}