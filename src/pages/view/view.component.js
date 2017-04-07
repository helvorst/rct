import React from 'react';
import Header from '../../comps/header/header.component';
import Progress from "../../shared/progress/progress.component";
import CategoryAdd from '../../comps/category/category-add/category-add.component';
import TodoAdd from '../../comps/todo/todo-add/todo-add.component';
import CategoryList from '../../comps/category/category-list/category-list.component';
import TodoList from '../../comps/todo/todo-list/todo-list.component';
import Search from '../../shared/search/search.component';

export default (props) => {

  const header = (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <Header/>
        </div>
        <div className="col-sm-6">
          <Search actions={props.actions}/>
        </div>
      </div>
      <Progress />
    </div>);

  const add = (
    <div className="row">
      <div className="col-sm-6">
        <CategoryAdd actions={props.actions}
                     categories={props.categories}/>
      </div>
      <div className="col-sm-6">
        <TodoAdd actions={props.actions}
                 category={props.category}
                 todos={props.todos}/>
      </div>
    </div>
  );

  const left = (
    <div className="col-sm-6">
      <CategoryList {...props}/>
    </div>

  );

  const right = (
    <div className="col-sm-6">
      <TodoList {...props}/>
    </div>
  );

  return (
    <div>
      {header}
      {add}
      {left} {right}
    </div>
  );
}
