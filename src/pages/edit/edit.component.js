import React from 'react';
import CategoryList from '../../comps/category/category-list/category-list.component';
import TodoEdit from '../../comps/todo/todo-edit/todo-edit.component';
import pure from '../../func/pure.js';
import Split from '../../shared/split/split.component';

export default pure((props) => {

  const left = <CategoryList {...props}/>;

  const right = <TodoEdit {...props}/>;

  const body = (
    <Split left={left}
           right={right}></Split>
  );

  return {body};
})