import React from 'react';
import Progress from "../../shared/progress/progress.component";
import CategoryList from '../../comps/category/category-list/category-list.component';
import TodoList from '../../comps/todo/todo-list/todo-list.component';
import pure from '../../func/pure';
import Split from '../../shared/split/split.component';
import {connect} from 'react-redux';
import {fetchCategories, getTodo} from '../../actions';

let View = pure((props) => {

  props.goForCategories();
  props.goForTodos();

  return (
    <div>
      <Progress property="done"/>

      <Split left={<CategoryList {...props}/>}
             right={<TodoList {...props}/>}>
      </Split>
    </div>
  );
});

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});
const mapDispatchToProps = (dispatch) => ({
  goForCategories: () => dispatch(fetchCategories()),
  goForTodos: () => dispatch(getTodo())
});
export default connect(mapStateToProps, mapDispatchToProps)(View);

