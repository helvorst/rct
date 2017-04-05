import React from 'react';
import './todo-list.styles.css';

export default class TodoList extends React.Component {

  done = (ev) => {
    let todo = this.props.todo;
    todo.done = ev.target.checked;
    this.props.actions.onSaveTodo(todo);
  };

  render() {
    if(!this.props.todos.length){
      return <div>no todos</div>
    }
    const renderTodos = () => this.props.todos.map(this.createItem.bind(this));

    return <ul className="list-group">{renderTodos()}</ul>;
  }

  createItem(item) {

      return <li className={"list-group-item " + (this.props.todo === item ? 'selected' : '')}
                 key={item.id}
                 onClick={() => this.props.actions.onSetTodo(item)}>
        <div className="row">
          <div className="pull-left">
            <div>
              <input type="checkbox" value={item.done} checked={item.done} onChange={ev => this.done(ev)}/>
              {item.name}
            </div>
            <div className="description">
              {item.description}
            </div>
          </div>
          <div className="pull-right">
            <a onClick={() => this.props.actions.onEditTodo(item)}><i className="fa fa-edit"></i></a>
          </div>
        </div>
      </li>

  }
}