import undoredo from './undoredo.component';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    canUndo: state.todos.past[state.todos.past.length - 1] != null,
    canRedo: state.todos.future.length>0
  }
};
const mapDispatch = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
};
const UndoRedoTodo = connect(mapState, mapDispatch)(undoredo);
export default UndoRedoTodo;