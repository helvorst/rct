import React from 'react';
import './category.styles.css';

export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: null,
            name: ''
        }
    }

    addSubcategoryHandler = (category) => {
        const newSub = this.props.actions.onAddSubcategory(category);
        this.enterEditHandler(newSub);
    };

    enterEditHandler = (category) => {
        this.setState({
            edit: category,
            name: category.name
        })
    };

    exitEditHandler = (save) => {
        this.setState({
            edit: null
        });
        if (save) {
            this.props.actions.onEditCategory(this.state.name);
        }
    };

    nameChangeHandler = (ev) => {
        this.setState({
            name: ev.target.value
        })
    };

    render() {
        if (!this.props.categories.length)
            return <div>no categories</div>;

        const categoriesList = (list) => list.map(x => {
            // 1 - normal item
            const controls = this.props.isEdit
                  // global edit
                  ? <div className="category-controls">
                      <a onClick={() => this.props.actions.onAssignCategory(x)}>
                          <i className="fa fa-reply"></i>
                      </a>
                  </div>
                  // global view
                  : <div className="category-controls">
                      <a onClick={() => this.enterEditHandler(x)}><i className="fa fa-edit"></i></a>
                      <a onClick={() => this.props.actions.onDelete(x)}><i className="fa fa-trash-o"></i></a>
                      <a onClick={() => this.addSubcategoryHandler(x)}><i className="fa fa-plus"></i></a>
                  </div>;

            const item = <div className="item-body">
                <div className="title"
                     onClick={() => this.props.isEdit
                           ? null
                           : this.props.actions.onSetCategory(x)}>{x.name}
                </div>
                {controls}
            </div>;

            // 1 - edit mode item
            const controlsEditable = <div className="category-controls">
                <a onClick={() => this.exitEditHandler(true)}><i className="fa fa-check"></i ></a>
                <a onClick={() => this.exitEditHandler()}><i className="fa fa-times"></i></a>
            </div>;
            const itemEditable = <div className="item-body">
                <div className="title">
                    <input className="form-control" type="text"
                           value={this.state.name}
                           onChange={(ev) => this.nameChangeHandler(ev)}
                    />
                </div>
                {controlsEditable}
            </div>;

            return (
                  <div className="item" key={x.id}>
                      <div className={this.props.category === x ? 'selected' : ''}>
                          {this.state.edit !== x ? item : itemEditable}
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