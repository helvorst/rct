import React from 'react';
import './category-list.styles.css';
import Category from '../category/category';

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: null,
      name: ''
    };

    this.actions = {
      edit: this.editCategory,
      select: this.props.actions.selectCategory,
      remove: this.removeCategory,
      add: this.addCategory,
      assign: this.assignCategory
    };
  }

  componentDidMount() {
    if(this.props.params.category) {
      const categoryId = +this.props.params.category;
      if (categoryId !== this.props.category.id) {
        const c = this.props.categories.find(x => x.id === categoryId);
        this.actions.select(c);
      }
    }
  }

  editCategory = (category, name) => {
    const target = this.props.categories.find(it => it === category);
    target.name = name;
    this.props.actions.setCategories(this.props.categories);
  };

  removeCategory = (category) => {
    const lookup = (list, cat) => {
      const ind = list.indexOf(cat)
      list.splice(ind, 1);
      const subs = list.filter(it => it.parent === cat.id);
      subs.map(s => lookup(list, s));
    };
    lookup(this.props.categories, category);
    this.props.actions.setCategories(this.props.categories);
  };

  addCategory = (name, parentId) => {
    const category = {
      name: name,
      id: this.props.categories.length,
      parent: parentId
    };
    this.props.categories.unshift(category);
    this.props.actions.setCategories(this.props.categories);
  };

  assignCategory = (category) => {
    // this.props.todo.category = category.id;
    // this.props.actions.setTodods(this.props.todos);
    this.props.actions.selectCategory(category);
  };

  render() {

    const itemRender = (item, depth) => {
      return <Category item={item}
                       depth={depth}
                       todo={this.props.todo}
                       category={this.props.category}
                       actions={this.actions}
                       isEditTodo={this.props.isEditTodo}
                       key={item.id}/>
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

    return (
      <div>
        {listRender(this.props.categories, null)}
      </div>
    )
  }
}