import React from 'react';
import './category.styles.css';

export default class Category extends React.Component {

  render() {
    if (!this.props.categories.length)
      return <div>no categories</div>;

    const categoriesList = (list) => list.map(x => {
      const controls = this.props.isEdit
        // edit
        ? <div className="category-controls">
          <a onClick={() => this.props.actions.onAssignCategory(x)}>
            <i className="fa fa-reply"></i>
          </a>
        </div>
        // view
        : <div className="category-controls">
          <a>
            <i className="fa fa-edit"></i>
          </a>
          <a onClick={() => this.props.actions.onDelete(x)}>
            <i className="fa fa-trash-o"></i>
          </a>
          <a>
            <i className="fa fa-plus"></i>
          </a>
        </div>;

      return (
        <div className="item" key={x.id}>
          <div className={"item-body " + (this.props.category === x ? 'selected' : '')}>
            <div onClick={() => this.props.isEdit ? null : this.props.actions.onSetCategory(x)}>{x.name}</div>
            {controls}
          </div>
          {x.sub && x.sub.length > 0 && <div className="sub">{categoriesList(x.sub)}</div>}
        </div>)

    });


    return (
      <div>
        {categoriesList(this.props.categories)}
      </div>
    )
  }
}