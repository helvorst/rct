import React from 'react';
import Checkbox from '../../../shared/checkbox/checkbox.component';
import './todo.styles.css';
import Controls from '../../../shared/controls/controls.component';
import {connect} from 'react-redux';
import {toggleTodo} from '../../../actions';

let Todo = (props) => {

  const toggle = () => {
    props.dispatch(toggleTodo(props.item.id))
  };

  const edit = () => {
    const to = `edit/${props.category}/${props.item.id}`;
    props.router.push(to);
  };

  const controls = [
    {
      name: 'edit',
      classesA: 'btn btn-sm',
      classesI: 'fa fa-edit',
      callback: edit
    }
  ];


  return (
    <li className="list-group-item">

      <div className="todo-body">
        <div className="todo-body__title">
          <Checkbox label={props.item.name}
                    value={props.item.done}
                    callback={toggle}/>
        </div>
        {/*<Link to={to}>edit</Link>*/}
        <Controls controls={controls}/>
      </div>

      <div className="todo-description">
        {props.item.description}
      </div>

    </li>
  );

};
const mapStateToProps = (state, ownProps) => ({
  category: state.category,
  ...ownProps
});

Todo = connect(mapStateToProps)(Todo);
export default Todo;