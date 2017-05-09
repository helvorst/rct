import {combineReducers} from 'redux';
import todos from './todos';
import {category} from './category';
import categories from './categories';
import filter from './filter';
// import undoable, {distinctState} from 'redux-undo';

let reducer = combineReducers({
  todos,
  category,
  categories,
  filter
});

// reducer = undoable(reducer, {
//   filter: distinctState()
// });

export default reducer;