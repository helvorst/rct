import React from 'react';
import CategoryList from '../../comps/category/category-list/category-list.component';
import TodoEdit from '../../comps/todo/todo-edit/todo-edit.component';
import pure from '../../func/pure.js';
import Split from '../../shared/split/split.component';

export default pure((props) => {
  {/*if (props.routeInfo.params.category) {*/}
    {/*//console.log(this.props.router.getCurrentLocation())*/}
  //   const categoryId = +props.routeInfo.params.category;
  //   if (categoryId !== props.category.id) {
  //     const c = props.categories.find(x => x.id === categoryId);
  //     props.actions.category.select(c);
  //   }
  // }


  const body = (
    <Split left={<CategoryList {...props}/>}
           right={<TodoEdit {...props}/>}>
    </Split>
  );

  return (
    <div>
      {body}
    </div>);
})