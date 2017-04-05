import React, {Component} from 'react';
import './App.css';
import Header from './comps/header/header.component';
import Progress from "./comps/progress/progress.component";
import AddNew from './comps/add-new/add-new.component';
import CategoryList from './comps/category/category-list/category-list.component';
import TodoList from './comps/todo/todo-list/todo-list.component';
import TodoEdit from './comps/todo/todo-edit/todo-edit.component';
const {Map, List, fromJS} = require('immutable');

let categories = [
  {id: 0, name: "Category 1 Clean", parent: null},
  {id: 1, name: "Clean sub-1", parent: 0},
  {id: 2, name: "Clean sub-2", parent: 0},
  {id: 3, name: "Category 2 Buy", parent: null},
  {id: 4, name: "Buy sub-1", parent: 3},
  {id: 5, name: "Buy sub-2", parent: 3},
  {id: 6, name: "Category 3 Paint", parent: null},
  {id: 7, name: "Category 4 Empty", parent: null}];
let todos = [
  {
    id: 0,
    category: 0,
    todos: [
      {id: 0, name: 'Clean windows', done: false, description: 'some desc'},
      {id: 1, name: 'Clean car', done: false, description: 'some desc'},
      {id: 2, name: 'Clean house', done: false, description: 'some desc'},
      {id: 3, name: 'Clean fruits', done: false, description: 'some desc'}
    ]
  },
  {
    id: 1,
    category: 3,
    todos: [
      {id: 0, name: 'buy windows', done: false, description: 'some desc'},
      {id: 1, name: 'buy car', done: false, description: 'some desc'},
      {id: 2, name: 'buy house', done: false, description: 'some desc'},
      {id: 3, name: 'buy fruits', done: false, description: 'some desc'}
    ]
  },
  {
    id: 2,
    category: 6,
    todos: [
      {id: 0, name: 'paint windows', done: false, description: 'some desc'},
      {id: 1, name: 'paint car', done: false, description: 'some desc'},
      {id: 2, name: 'paint house', done: false, description: 'some desc'},
      {id: 3, name: 'paint fruits', done: false, description: 'some desc'}
    ]
  }
];


class App extends Component {

  constructor() {
    super();
    this.state = {
      categories: fromJS(categories),
      isEdit: false,
      category: this.getDefaultCategory(),
      todo: null, //this.getDefaultTodo(),
    };

    this.actions = {
      selectCategory: this.selectCategory,
      editCategory: this.editCategory,
      onSetTodo: this.setTodoHandler,
      onEditTodo: this.editTodoHandler,

      onSaveTodo: this.saveTodoHandler,
      onAssignCategory: this.assignCategoryHandler,
      onAdd: this.addHandler, // for both category & todo
      onDelete: this.deleteHandler, //for category only
      onAddSubcategory: this.addSubCategoryHandler,
      onSearch: this.searchHandler
    };
  }



  componentDidMount() {
    console.log(this.state)
  }

  getTodoList = () => todos.filter(todo => todo.category === this.state.category);
  getCategoryList = () => categories;
  getDefaultCategory = () => this.getCategoryList()[0];
  //getDefaultTodo = () => this.getTodoList()[0];


  // getId = (arr) => arr.length;
  // getIndex = (arr, target) => arr.indexOf(target);

  selectCategory = (category) => {
    this.setState({
      category: category
    });
    console.log('send: ', category, 'set', this.state.category)
  };
  editCategory = (category, name) => {
    const ind = this.state.categories.findIndex(it => {
      console.log(it)
      return it === category
    });
    this.setState({
      categories: this.state.categories.setIn([ind, 'name'], 'haha')
    });
    console.log(this.state.categories.toJS())
  };

  setTodoHandler = (todo = this.getTodoList()[0]) => {
    this.setState({
      todo: todo
    });
  };
  // editTodoHandler = (todo) => {
  //   this.setState({
  //     todo: todo,
  //     isEdit: true
  //   });
  // };

  // saveTodoHandler = (todo) => {
  //   this.setState({
  //     todo: todo,
  //     isEdit: false
  //   });
  // };
  // assignCategoryHandler = (categoryTo) => {
  //   let categoryFrom = this.state.category;
  //   const index = this.getIndex(categoryFrom.todos, this.state.todo);
  //   categoryFrom.todos.splice(index, 1);
  //   const todo = this.state.todo
  //   todo.id = categoryTo.todos.length;
  //   this.setTodoHandler(todo);
  //   categoryTo.todos = categoryTo.todos || [];
  //   categoryTo.todos.push(todo);
  //   this.setCategoryHandler(categoryTo);
  // };
  //
  // addHandler = (name, target) => {
  //   const category = this.state.category;
  //   if (target === 'todo') {
  //     category.todos.unshift({
  //       name: name,
  //       id: this.getId(this.state.category.todos),
  //       description: '',
  //       done: false
  //     });
  //     this.setCategoryHandler(category);
  //   } else if (target === 'category') {
  //     const newCategory = {
  //       name: name,
  //       id: this.getId(categories),
  //       todos: [],
  //       sub: []
  //     };
  //     categories.unshift(newCategory);
  //     this.setCategoryHandler(newCategory);
  //   }
  // };
  //
  // addCategory = (category, categoryParentId) => {
  //   const source = categoryParentId ? this.state.categories.find({id: categoryParentId}) : this.state.categories;
  //
  //
  //   const newSub = {
  //     name: 'New sub',
  //     id: this.getId(category.sub),
  //     todos: [],
  //     sub: []
  //   };
  //
  //   source.unshift(newSub);
  //   this.setCategoryHandler(newSub);
  //   return newSub;
  // };
  //
  // deleteHandler = (deleteCategory) => {
  //   const traverse = (arr, item) => {
  //     const ind = arr.indexOf(item);
  //     if (ind > -1) {
  //       arr.splice(ind, 1);
  //       return;
  //     } else {
  //       return arr.map(a => a.sub ? traverse(a.sub, item) : null);
  //     }
  //   };
  //   traverse(categories, deleteCategory);
  //   let currentCategory = this.state.category;
  //   if (deleteCategory === currentCategory) {
  //     currentCategory = categories[0]
  //   }
  //   // todo is it ok to refresh through calling setState()?
  //   this.setCategoryHandler(currentCategory);
  // };
  //
  // searchHandler = (searchString, done) => {
  //   this.setState({searchString});
  //   // todo "done" doesnt work: "done" is lost after categories=[new]
  //   const traverse = (item) => {
  //     item.todos = item.todos || [];
  //     item.todos = item.todos.filter(todo => {
  //       return todo.name.toLocaleLowerCase().indexOf(searchString) > -1
  //         && (done ? todo.done === done : true)
  //     });
  //     const match = item.todos.length > 0 ? true : false;
  //     if (item.sub) {
  //       return match || traverse(item.sub);
  //     }
  //     else return match;
  //   };
  //   // todo: whois a fool
  //   //categories = Object.assign({}, categoriesRaw);
  //   //categories = categoriesRaw.slice(0);
  //   // categories = JSON.parse(JSON.stringify(categoriesRaw));
  //   // categories = categories.filter(cat => traverse(cat));
  //   //todo
  //   //todo
  //   //todo
  //   //todo
  //   //todo: must be other way to refresh view
  //   this.setCategoryHandler(categories[0]);
  //   console.log(categories)
  // };

  render() {

    console.log('render app')

    {/*const top = this.state.isEdit*/
    }
    {/*? <div className="header">*/
    }
    {/*<h1>{this.state.todo.name}</h1>*/
    }
    {/*<h5>{this.state.category.name}</h5>*/
    }
    {/*</div>*/
    }
    {/*: <div>*/
    }
    //     <Header actions={this.actions}/>
    //     <Progress />
    //     <div className="row add-new">
    //       <div className="col-sm-6"><AddNew for="category" actions={this.state.actions}/></div>
    //       <div className="col-sm-6"><AddNew for="todo" actions={this.state.actions}/></div>
    //     </div>
    //   </div>;

    // const left = <Category categories={ this.getCategoryList() }
    //                        category={this.state.category}
    //                        actions={this.state.actions}
    //                        isEdit={this.state.isEdit}/>;
    // const right = this.state.isEdit
    //   ? <TodoEdit todo={this.state.todo}
    //               actions={this.state.actions}/>
    //   : <TodoList todos={this.getTodoList()}
    //               todo={this.state.todo}
    //               actions={this.state.actions}
    //               isEdit={this.state.isEdit}/>;


    return (<div className="App">
      {/*{top}*/}
      <div className="row">
        <div className="category col-sm-6">
          <CategoryList categories={this.state.categories.toJS()}
                        category={this.state.category}
                        actions={this.actions}/>
        </div>
        <div className="todo col-sm-6">

        </div>
      </div>
    </div>);
  }
}

export default App;
