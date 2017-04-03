import React from 'react';
import './category.styles.css';

export default class Category extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  listClick(id) {
    this.setState({selected: id});
    this.props.onClick(id);
  }

  categoriesList() {
    return this.props.categories.map(x => {
      return <li className="list-group-item"
                 key={x.id}
                 onClick={e => this.listClick(x.id)}
                 style={{backgroundColor: this.state.selected === x.id ? 'lightgray' : 'white'}}>
        {/*<input type="checkbox"/>*/}
        {x.name}
        <div className="category-controls">
          <a className="fa fa-edit"></a>
          <a className="fa fa-trash-o"></a>
          <a className="fa fa-plus"></a>
        </div>
      </li>
    });
  }


  render() {
    return (
      <ul className="list-group">
        {this.categoriesList()}
      </ul>
    )
  }
}