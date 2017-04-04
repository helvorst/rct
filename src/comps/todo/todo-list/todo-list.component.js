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
    const renderTodos = () => this.props.todos.map(x => {
      return <li className={"list-group-item " + (this.props.todo === x ? 'selected' : '')}
                 key={x.id}
                 onClick={() => this.props.actions.onSetTodo(x)}>
        <div className="row">
          <div className="pull-left">
            <div>
              <input type="checkbox" value={x.done} checked={x.done} onChange={ev => this.done(ev)}/>
              {x.name}
            </div>
            <div className="description">
              {x.description}
            </div>
          </div>
          <div className="pull-right">
            <a onClick={() => this.props.actions.onEditTodo(x)}><i className="fa fa-edit"></i></a>
          </div>
        </div>
      </li>
    });

    return <ul className="list-group">{renderTodos()}</ul>;
  }
}