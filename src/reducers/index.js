import {combineReducers} from 'redux';
import todos from './todos';
import {category} from './category';
import categories from './categories';
import filter from './filter';

const reducer = combineReducers({
  todos,
  category,
  categories,
  filter
});

export default reducer;