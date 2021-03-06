import React from 'react';
import Progress from "../../shared/progress/progress.component";
import CategoryList from '../../comps/category/category-list/category-list.component';
import TodoList from '../../comps/todo/todo-list/todo-list.component';
import pure from '../../func/pure';
import Split from '../../shared/split/split.component';

export default pure((props) => {

  const header = <Progress list={props.todos}
                           property="done"/>;

  const left = <CategoryList actions={props.actions.category}
                             list={props.categories}
                             listContent={props.todos}
                             active={props.category}
                             routeInfo={props.routeInfo}/>;

  const right = <TodoList actions={props.actions.todo}
                          list={props.todos}
                          category={props.category}
                          filter={props.filter}
                          routeInfo={props.routeInfo}/>;

  const body = (
    <Split left={left}
           right={right}></Split>
  );

  return (
    <div>
      {header}
      {body}
    </div>
  );
})
