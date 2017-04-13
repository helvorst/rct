import React from 'react';
import CategoryList from '../../comps/category/category-list/category-list.component';
import TodoEdit from '../../comps/todo/todo-edit/todo-edit.component';
import pure from '../../func/pure.js';
import Split from '../../shared/split/split.component';

export default pure((props) => {
  {/*if (props.routeInfo.params.category) {*/}
    {/*//console.log(this.props.router.getCurrentLocation())*/}
  //   const categoryId = +props.routeInfo.params.category;
  //   if (categoryId !== props.category.id) {
  //     const c = props.categories.find(x => x.id === categoryId);
  //     props.actions.category.select(c);
  //   }
  // }
  const left = <CategoryList actions={props.actions.category}
                             list={props.categories}
                             listContent={props.todos}
                             active={props.category}
                             routeInfo={props.routeInfo}/>;

  const right = <TodoEdit actions={props.actions.todo}
                          todos={props.todos}
                          category={props.category}
                          filter={props.filter}
                          routeInfo={props.routeInfo}/>;

  const body = (
    <Split left={left}
           right={right}></Split>
  );

  return (
    <div>
      {body}
    </div>);
})