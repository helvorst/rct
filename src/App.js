import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './comps/header/header.component';
import Progress from "./comps/progress/progress.component";
import AddNew from './comps/add-new/add-new.component';
import Category from './comps/category/category.component';
import Todo from './comps/todo/todo.component';

const categories = [
  {
    id: 0,
    name: "Category 1",
    todos: [
      {id: 0, name: 'Clean windows', done: false},
      {id: 1, name: 'Clean car', done: false},
      {id: 2, name: 'Clean house', done: false},
      {id: 3, name: 'Clean fruits', done: false}
    ]
  },
  {
    id: 1,
    name: "Category 2",
    todos: [
      {id: 0, name: 'Buy windows', done: false},
      {id: 1, name: 'Buy car', done: false},
      {id: 2, name: 'Buy house', done: false},
      {id: 3, name: 'Buy fruits', done: false}
    ]
  },
  {
    id: 2,
    name: "Category 3",
    todos: [
      {id: 0, name: 'Paint windows', done: false},
      {id: 1, name: 'Paint car', done: false},
      {id: 2, name: 'Paint house', done: false},
      {id: 3, name: 'Paint fruits', done: false}
    ]
  },
  {id: 3, name: "Category 4", todos: []}
];

class App extends Component {

  constructor() {
    super();
    this.state = {
      category: null,
      todos: []
    };
    //this.setCategory(categories[0].id);
  }

  setCategory = (id) => {
    this.setState({
      category: id,
      todos: categories[id].todos
    });
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <Progress/>
        <div className="row add-new">
          <div className="col-sm-6"><AddNew for="category"/></div>
          <div className="col-sm-6"><AddNew for="todo"/></div>
        </div>
        <div className="row tasks">
          <div className="category col-sm-6">
            <Category categories={categories} onClick={(id) => this.setCategory(id)}/>
          </div>
          <div className="todo col-sm-6">
            <Todo todos={this.state.todos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
