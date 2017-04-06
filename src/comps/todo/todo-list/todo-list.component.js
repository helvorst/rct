import React from 'react';
import './todo-list.styles.css';
import Todo from '../todo/todo.component';

export default class TodoList extends React.Component {

  edit = (todo) => {
    let target = this.props.todos.find(x => x === todo);
    target = todo;
   this.props.actions.setTodods(this.props.todos);
  };

  actions = {
    mark: this.edit,
    edit: this.props.actions.edit
  };

  render() {

    if (!this.props.todos.length) {
      return <div>no todos</div>
    }

    const renderTodo = (item) => <Todo item={item}
                                       actions={this.actions}
                                       key={item.id}/>;

    const renderTodos = () => this.props.todos.map(renderTodo);

    return <ul className="list-group">{renderTodos()}</ul>;
  }

}