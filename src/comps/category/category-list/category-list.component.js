import React from 'react';
import './category-list.styles.css';
import Category from '../category/category';
import InputBtn from '../../../shared/input-button/input-button.component';

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.actions = {
      select: this.select,
      edit: this.edit,
      remove: this.remove,
      add: this.add,
      assign: this.assign,
      setList: this.setList
    };
  }

  componentDidMount() {
  }

  setList = () => {
    this.props.actions.set(this.props.list);
  };

  select = (item) => {
    this.props.actions.select(item);
  };

  edit = (item, name) => {
    const target = this.props.list.find(it => it === item);
    target.name = name;
    this.setList();
  };

  remove = (item) => {
    const lookup = (list, cat) => {
      const ind = list.indexOf(cat);
      list.splice(ind, 1);
      const subs = list.filter(it => it.parent === cat.id);
      subs.map(s => lookup(list, s));
    };
    lookup(this.props.list, item);
    this.setList();
  };

  add = (name, parentId) => {
    const item = {
      name: name ? name : "new cat",
      id: this.props.list.length,
      parent: parentId
    };
    this.props.list.unshift(item);
    this.setList();
  };

  assign = (item) => {
    this.select(item)
  };

  render() {

    const itemRender = (item, depth) => {
      return <Category item={item}
                       depth={depth}
                       todo={this.props.listContent}
                       category={this.props.active}
                       actions={this.actions}
                       key={item.id}
                       routeInfo={this.props.routeInfo}/>
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
      callback: (name) => this.add(name, null)
    }];

    return (
      <div>
        <InputBtn
          placeholder="Add fuckencategory"
          buttons={addbtns}/>

        {listRender(this.props.list, null)}
      </div>
    )
  }
}