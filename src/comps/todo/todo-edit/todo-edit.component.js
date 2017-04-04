import React from 'react';

export default class TodoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editTodo: this.props.todo
    };
  }
  change = (ev, field) => {
    let todo = this.state.editTodo;
    todo[field] = ev.target.value;
    this.setState({editTodo: todo});
  };

  check = (ev, field) => {
    let todo = this.state.editTodo;
    todo[field] = ev.target.checked;
    this.setState({editTodo: todo});
  };

  render() {
    return (
      <div>
        <div className="row controls">
          <button className="btn btn-success" onClick={() => this.props.actions.onSaveTodo(this.state.editTodo)}>Save</button>
          <button className="btn btn-primary" onClick={() => this.props.actions.onSaveTodo()}>Cancel</button>
        </div>
        <div className="row name">
          <input type="text" className="form-control" value={this.state.editTodo.name} onChange={ev => this.change(ev, 'name')}/>
        </div>
        <div className="row done">
          <input type="checkbox" value={this.state.editTodo.done} checked={this.state.editTodo.done} onChange={ev => this.check(ev, 'done')}/>
          <label>Done</label>
        </div>
        <div className="row description">
          <textarea className="form-control" rows="5" value={this.state.editTodo.description} onChange={ev => this.change(ev, 'description')}></textarea>
        </div>
      </div>

    )
  }
}