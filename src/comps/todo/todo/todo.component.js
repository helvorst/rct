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

  edit = () => {
    const to = `edit/${this.props.category.id}/${this.props.item.id}`;
    this.props.routeInfo.router.push(to);
  };

  render() {

    const controls = [
      {
        name: 'edit',
        classesA: 'btn btn-sm',
        classesI: 'fa fa-edit',
        callback: this.edit
      }
    ];



    return (
      <li className="list-group-item">

        <div className="todo-body">
          <div className="todo-body__title">
            <Checkbox label={this.props.item.name}
                      value={this.props.item.done}
                      callback={this.mark}/>
          </div>
          {/*<Link to={to}>edit</Link>*/}
          <Controls controls={controls}/>
        </div>

        <div className="todo-description">
          {this.props.item.description}
        </div>

      </li>
    );
  }
}