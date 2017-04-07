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

    const renderTodos = () => {
      let list = this.props.todos
        .filter(todo => todo.category === this.props.category.id);

      if (this.props.filter) {
        list = list.filter(x => {
          const doneCriteria = this.props.filter.done
            ? x.done === this.props.filter.done
            : true;
          const nameCriteria = this.props.filter.value
            ? x.name.toLowerCase().indexOf(this.props.filter.value.toLowerCase()) > -1
            : true;
          return doneCriteria && nameCriteria;
        })
      }

      return list.length > 0
        ? list.map(renderTodo)
        : <div>no todos in this category</div>
    };

    return (
      <ul className="list-group">
        {renderTodos()}
      </ul>);
  }

}