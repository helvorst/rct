import React from 'react';
import Checkbox from '../../../shared/checkbox/checkbox.component';
import './todo.styles.css';
import Controls from '../../../shared/controls/controls.component';

export default class Todo extends React.Component {

  mark = (state) => {
    const todo = this.props.item;
    todo.done = state;
    this.props.actions.mark(todo);
  };

  edit = () => this.props.actions.edit(this.props.item);

  render() {

    const controls = [
      {
        name: 'edit',
        classes: 'fa fa-edit',
        handler: this.edit
      }
    ];

    return (
      <li className="list-group-item">

        <div className="todo-body">
          <div className="todo-body__title">
            <Checkbox value={this.props.item.done}
                      callback={this.mark}/>
            {this.props.item.name}
          </div>
          <Controls controls={controls}/>
        </div>

        <div className="todo-description">
          {this.props.item.description}
        </div>

      </li>
    );
  }
}