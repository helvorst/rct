import React from 'react';

export default class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    };
  }

  todo() {
    return this.props.todos.map(x => {
      return <li className="list-group-item"
                 key={x.id}
                 onClick={() => this.setState({selected: x.id})}
                 style={{backgroundColor: this.state.selected === x.id ? 'lightgray' : 'white'}}>
        <input type="checkbox"/>
        {x.name}
        <div className="category-controls">
          <a><i className="fa fa-edit"></i></a>
        </div>
      </li>
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.todo()}
      </ul>
    )
  }
}