import React from 'react';
import Progress from "../../shared/progress/progress.component";
import CategoryList from '../../comps/category/category-list/category-list.component';
import TodoList from '../../comps/todo/todo-list/todo-list.component';
import pure from '../../func/pure';
import Split from '../../shared/split/split.component';


export default pure((props) => {

  return (
    <div>
      <Progress property="done"/>

      <Split left={<CategoryList {...props}/>}
             right={<TodoList {...props}/>}>
      </Split>
    </div>
  );
})
