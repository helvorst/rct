import React from 'react';
import Header from '../../comps/header/header.component';
import Progress from "../../shared/progress/progress.component";
import AddNew from '../../comps/add-new/add-new.component';
import CategoryList from '../../comps/category/category-list/category-list.component';
import TodoList from '../../comps/todo/todo-list/todo-list.component';

export default class View extends React.Component {


  render() {
    const header = (
      <div>
        <Header/>
        <Progress />
      </div>);

    const add = (
      <div className="row">
        <div className="col-sm-6"><AddNew for="category"/></div>
        <div className="col-sm-6"><AddNew for="todo" /></div>
      </div>
    );

    const left = (
      <div className="col-sm-6">
        <CategoryList categories={this.props.categories}
                      category={this.props.category}
                      actions={this.props.actions}/>
      </div>

    );

    const right = (
      <div className="col-sm-6">
        <TodoList todos={this.props.todos}
                  actions={this.props.actions}/>
      </div>
    );

    return (
      <div className="App">

        {header}

        {add}

        {left} {right}

      </div>);
  }
}
