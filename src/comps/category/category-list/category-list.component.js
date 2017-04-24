import React from 'react';
import './category-list.styles.css';
import Category from '../category/category';
import InputBtn from '../../../shared/input-button/input-button.component';
import {connect} from 'react-redux';
import {selectCategory, addCategory, removeCategory, editCategory} from '../../../actions';


let CategoryList = (props) => {

  if(props.categories == null){
    return <div>loading</div>
  }
  const actions = {
    select: id => props.dispatch(selectCategory(id)),
    add: (name, parentId) => {
      const item = {
        name: name ? name : "new cat",
        parent: parentId
      };
      props.dispatch(addCategory(item));
    },
    remove: id => props.dispatch(removeCategory(id)),
    edit: cat => props.dispatch(editCategory(cat))
  };

  const itemRender = (item, depth) => {
    return <Category item={item}
                     depth={depth}
                     actions={actions}
                     category={props.category}
                     key={item.id}
                     {...props}/>
  };

  const listRender = (list, parent, depth = 0) => {
    const level = list.filter(item => item.parent === parent);
    return (d => level.map(item => {
      const result = [];
      const top = itemRender(item, d);
      result.push(top);
      const subs = (dd => listRender(list, item.id, ++dd))(d);
      result.push(subs);
      return result;
    }))(depth);
  };

  const addbtns = [{
    name: 'add',
    display: 'Add',
    classesA: 'btn btn-primary',
    callback: (name) => actions.add(name, null)
  }];

  return (
    <div>
      <InputBtn
        placeholder="Add fuckencategory"
        buttons={addbtns}/>

      {listRender(props.categories, null)}
    </div>
  )

};

const mapStateToProps = (state, ownProps) => ({
  category: state.category,
  categories: state.categories,
  ...ownProps
});

// const mapDispatchToProps = {
//   select: selectCategory
// };

CategoryList = connect(mapStateToProps)(CategoryList);
export default CategoryList;