import React from 'react';
import CategoryList from '../../comps/category/category-list/category-list.component';
import TodoEdit from '../../comps/todo/todo-edit/todo-edit.component';
import pure from '../../func/pure.js';
import Split from '../../shared/split/split.component';

export default pure((props) => {
  const body = (
    <Split left={<CategoryList {...props}/>}
           right={<TodoEdit {...props}/>}>
    </Split>
  );

  return (
    <div>
      {body}
    </div>);
})