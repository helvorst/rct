import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import './App.css';
import View from './pages/view/view.component';
import Edit from './pages/edit/edit.component';
import Header from './comps/header/header.component';
import Search from './shared/search/search.component';
import Split from './shared/split/split.component';

//const {Map, List, fromJS} = require('immutable');

let categories = [
  {id: 0, name: "Category 1 Clean", parent: null},
  {id: 1, name: "Clean sub-1", parent: 0},
  {id: 2, name: "Clean sub-2", parent: 0},
  {id: 3, name: "Category 2 Buy", parent: null},
  {id: 4, name: "Buy sub-1", parent: 3},
  {id: 5, name: "Buy sub-2", parent: 3},
  {id: 6, name: "Category 3 Paint", parent: null},
  {id: 7, name: "Category 4 Empty", parent: null},
  {id: 8, name: "Clean sub-2-2", parent: 2},];

let todos = [
  {id: 0, name: 'Clean windows', done: false, description: 'some desc', category: 0},
  {id: 1, name: 'Clean car', done: false, description: 'some desc', category: 0},
  {id: 2, name: 'Clean house', done: false, description: 'some desc', category: 1},
  {id: 3, name: 'Clean fruits', done: true, description: 'some desc', category: 1},
  {id: 4, name: 'buy windows', done: false, description: 'some desc', category: 3},
  {id: 5, name: 'buy car', done: false, description: 'some desc', category: 3},
  {id: 6, name: 'buy house', done: true, description: 'some desc', category: 3},
  {id: 7, name: 'buy fruits', done: false, description: 'some desc', category: 3},
  {id: 8, name: 'paint windows', done: false, description: 'some desc', category: 6},
  {id: 9, name: 'paint car', done: false, description: 'some desc', category: 6},
  {id: 10, name: 'paint house', done: false, description: 'some desc', category: 6},
  {id: 11, name: 'paint fruits', done: true, description: 'some desc', category: 6}
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      categories: categories,
      todos: todos,
      category: categories[0],
      todo: null,
      filter: null
    };

    this.actions = {
      category: {
        set: this.setCategories,
        select: this.selectCategory,
      },
      todo: {
        set: this.setTodos,
        edit: this.edit
      },

      setFilter: this.setFilter
    }
  }

  componentDidMount() {

  }

  setCategories = (categories) => {
    this.setState({categories: categories});
  };

  setTodos = (todos) => {
    this.setState({todos: todos})
  };

  selectCategory = (category) => {
    this.setState({
      category: category
    });
  };

  setFilter = (params) => {
    this.setState({
      filter: params
    })
  };

  render() {

    const headerLeft = <Header/>;
    const headerRight = <Search callback={this.actions.setFilter}/>;
    return (
      <div className="App">

        <Split left={headerLeft}
               right={headerRight}/>

        <Router history={browserHistory} key={Math.random()}>
          <Route path="/"
                 component={(params) => <View  {...this.state}
                                               actions={this.actions}
                                               routeInfo={params}/>}></Route>

          <Route path="/edit/:category/:todo"
                 component={(params) => <Edit {...this.state}
                                              actions={this.actions}
                                              routeInfo={params}/>}></Route>

        </Router>

      </div>);
  }
}
export default App;

