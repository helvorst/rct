import undoredo from './undoredo.component';
import {connect} from 'react-redux';
import {ActionCreators} from 'redux-undo';

const mapState = (state) => {
  return {
    canUndo: state.categories.past[state.categories.past.length - 1] !== null,
    canRedo: state.categories.future.length > 0
  }
};
const mapDisp = (dispatch) => {
  return {
    onUndo: () => dispatch(ActionCreators.undo()),
    onRedo: () => dispatch(ActionCreators.redo())
  }
};

const UndoRedoCategory = connect(mapState, mapDisp)(undoredo);
export default  UndoRedoCategory;
