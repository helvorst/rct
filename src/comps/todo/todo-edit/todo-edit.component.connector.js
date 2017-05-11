import {connect} from 'react-redux';
import TodoEditComponent from './todo-edit.component';
const mapStateToProps = (state, ownProps) => ({
  todos: state.todos.present,
  category: state.category,
  ...ownProps
});

const TodoEdit = connect(mapStateToProps)(TodoEditComponent);
export default TodoEdit;