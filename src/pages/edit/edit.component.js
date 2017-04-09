import React from 'react';
import Header from '../../comps/header/header.component';
import CategoryList from '../../comps/category/category-list/category-list.component';
import TodoList from '../../comps/todo/todo-list/todo-list.component';
import TodoEdit from '../../comps/todo/todo-edit/todo-edit.component';

export default (props) => {

  const left = (
    <div className="col-sm-6">
      <CategoryList {...props}
                    isEditTodo={true}/>
    </div>

  );

  const right = (
    <div className="col-sm-6">
      <TodoEdit {...props}/>
    </div>
  );

  return (
    <div>
      {left}
      {right}
    </div>
  )
}