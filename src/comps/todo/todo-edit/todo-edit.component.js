import React from 'react';
import Button from '../../../shared/button/button.component';
import Input from '../../../shared/input/input.component';
import Checkbox from '../../../shared/checkbox/checkbox.component';
import Textarea from '../../../shared/textarea/textarea.component';

export default class TodoEdit extends React.Component {
  constructor(props) {
    super(props);
    const todoId = props.routeInfo.params.todo;
    this.todo = props.todos.find(x=>x.id === +todoId);

    this.state = {
      todo: {...this.todo}
    };
  }

  changeName = (name) => {
    this.setState({
        todo: {...this.state.todo, name}
    })
  };

  changeDone = (done) => {
    this.setState({
      todo: {...this.state.todo, done}
    })
  };

  changeDescription = (description) => {
    this.setState({
      todo: {...this.state.todo, description}
    })
  };

  save = (save) => {
    if (save) {
      Object.assign(this.todo, this.state.todo);
      this.todo.category =  this.props.category.id;
      this.props.actions.set(this.props.todos);
    }
    this.props.routeInfo.router.push('/');
  };

  render() {
    const btns = {
      save: {
        name: 'save',
        display: 'Save',
        callback: () => this.save(true),
        classesA: 'btn btn-success'
      },
      cancel: {
        name: 'cancel',
        display: 'Cancel',
        callback: () => this.save(),
        classesA: 'btn btn-warning'
      }
    };

    //const findCategoryName = () => this.props.categories.find(click => click.id === this.props.todo.category).name;

    return (

      <div>

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