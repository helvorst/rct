import React from 'react';
import Button from '../../../shared/button/button.component';
import Input from '../../../shared/input/input.component';
import Checkbox from '../../../shared/checkbox/checkbox.component';
import Textarea from '../../../shared/textarea/textarea.component';
import './todo-edit.styles.css';

export default class TodoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {...this.props.todo}
    };
  }

  changeName = (name) => {
    this.state.todo.name = name;
  };

  changeDone = (done) => {
    this.state.todo.done = done;
  };

  changeDescription = (desc) => {
    this.state.todo.description = desc;
  };

  save = (save) => {
    if (save) {
      let target = this.props.todos.find(x => x === this.props.todo);
      //target = this.state.todo;
      Object.assign(target, this.state.todo);
      target.category = this.props.category.id;
      this.props.actions.setTodods(this.props.todos);
    }
    this.props.actions.edit();
  };

  render() {

    const btns = {
      save: {
        name: 'save',
        callback: () => this.save(true),
        classesA: 'btn btn-success'
      },
      cancel: {
        name: 'cancel',
        callback: () => this.save(),
        classesA: 'btn btn-warning'
      }
    };

    //const findCategoryName = () => this.props.categories.find(x => x.id === this.props.todo.category).name;

    return (

      <div className="todo-edit">

        <div>
          <Button {...btns.save}/>
          <Button {...btns.cancel}/>
        </div>

        <Input value={this.state.todo.name}
               callback={this.changeName}/>

        <Checkbox label="Done"
                  value={this.state.todo.done}
                  callback={this.changeDone}/>


        <Textarea value={this.state.todo.description}
                  callback={this.changeDescription}/>

      </div>)
  }
}