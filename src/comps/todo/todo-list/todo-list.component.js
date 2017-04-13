import React from 'react';
import './todo-list.styles.css';
import Todo from '../todo/todo.component';
import InputBtn from '../../../shared/input-button/input-button.component';

export default class TodoList extends React.Component {

  setList = () => {
    this.props.actions.set(this.props.list);
  };

  edit = (item) => {
    let target = this.props.list.find(x => x === item);
    target = item;
    this.setList();
  };

  add = (name) => {
    const item = {
      name: name,
      id: this.props.list.length,
      category: this.props.category.id
    };
    this.props.list.unshift(item);
    this.setList();
  };

  actions = {
    mark: this.edit,
    edit: this.props.actions.edit
  };

  render() {

    if (!this.props.list.length) {
      return <div>no items</div>
    }

    const renderTodo = (item) => <Todo item={item}
                                       actions={this.actions}
                                       category={this.props.category}
                                       key={item.id}
                                       routeInfo ={this.props.routeInfo}/>;

    const renderList = () => {
      let list = this.props.list
        .filter(x => x.category === this.props.category.id);

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
        : <div>no items in this list</div>
    };

    const addbtns = [{
      name: 'add',
      display: 'Add',
      classesA: 'btn btn-primary',
      callback: (name) => this.add(name, null)
    }];

    return (
      <div>
        <InputBtn
          placeholder="Add todo"
          buttons={addbtns}/>

        <ul className="list-group">
          {renderList()}
        </ul>
      </div>);
  }

}