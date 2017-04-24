import React from 'react';
import Button from '../../../shared/button/button.component';
import Input from '../../../shared/input/input.component';
import Checkbox from '../../../shared/checkbox/checkbox.component';
import Textarea from '../../../shared/textarea/textarea.component';
import {connect} from 'react-redux';
import {editTodo} from '../../../actions';

class TodoEditClass extends React.Component {
  constructor(props) {
    super(props);
    const todoId = props.params.todo;
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
  changeDesc = (description) => {
    this.setState({
      todo: {...this.state.todo, description}
    })
  };
  save = (save) => {
    if(save) {
      const todo = Object.assign({}, this.state.todo);
      todo.category = this.props.category;
      this.props.dispatch(editTodo(todo));
    }
    this.props.router.push('/');
  };

  render () {
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
                  callback={this.changeDesc}/>

      </div>)
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  category: state.category,
  ...ownProps
});

const TodoEdit = connect(mapStateToProps)(TodoEditClass);
export default TodoEdit;