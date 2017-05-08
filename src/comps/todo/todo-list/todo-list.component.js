import React from 'react';
import './todo-list.styles.css';
import Todo from '../todo/todo.component';
import InputBtn from '../../../shared/input-button/input-button.component';
import {connect} from 'react-redux';
import {addTodo} from '../../../actions';

let TodoList;
TodoList = (props) => {

  const add = (name) => {
    const item = {
      name: name,
      id: props.todos.length,
      done: false,
      category: props.category
    };
    props.dispatch(addTodo(item))
  };

  const renderTodo = (item) => <Todo item={item}
                                     key={item.id}
                                     {...props}/>;

  const renderList = () => {
    let list = props.todos
      .filter(x => {
        return x.category === props.category
      });

    if (props.filter) {
      list = list.filter(x => {
        const doneCriteria = props.filter.done
          ? x.done === props.filter.done
          : true;
        const nameCriteria = props.filter.search
          ? x.name.toLowerCase().indexOf(props.filter.search.toLowerCase()) > -1
          : true;
        return doneCriteria && nameCriteria;
      })
    }

    //console.log('ren todo: ', list.length, ' done:', props.filter.done)
    return list.length > 0
      ? list.map(renderTodo)
      : <div>no items in this list</div>
  };

  const addbtns = [{
    name: 'add',
    display: 'Add',
    classesA: 'btn btn-primary',
    callback: (name) => add(name, null)
  }];

  if (!props.todos) {
    return <div>loading wait</div>
  }
  if (!props.todos.length) {
    return <div>no items</div>
  }
  else  return (
    <div>
      <InputBtn
        placeholder="Add todo"
        buttons={addbtns}/>

      <ul className="list-group">
        {renderList()}
      </ul>
    </div>);

};


const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  category: state.category,
  categories: state.categories,
  filter: state.filter,
  ...ownProps
});

TodoList = connect(mapStateToProps)(TodoList);
export default TodoList;