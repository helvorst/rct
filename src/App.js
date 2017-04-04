import React, {Component} from 'react';
import './App.css';
import Header from './comps/header/header.component';
import Progress from "./comps/progress/progress.component";
import AddNew from './comps/add-new/add-new.component';
import Category from './comps/category/category.component';
import TodoList from './comps/todo/todo-list/todo-list.component';
import TodoEdit from './comps/todo/todo-edit/todo-edit.component';


const categoriesRaw = [
    {
        id: 0,
        name: "Category 1 Clean",
        todos: [
            {id: 0, name: 'Clean windows', done: false, description: 'some desc'},
            {id: 1, name: 'Clean car', done: false, description: 'some desc'},
            {id: 2, name: 'Clean house', done: false, description: 'some desc'},
            {id: 3, name: 'Clean fruits', done: false, description: 'some desc'}
        ],
        sub: [
            {id: 0, name: "Clean sub-1"}, {id: 1, name: "Clean sub-2"}
        ]
    },
    {
        id: 1,
        name: "Category 2 Buy",
        todos: [
            {id: 0, name: 'Buy windows', done: false},
            {id: 1, name: 'Buy car', done: false},
            {id: 2, name: 'Buy house', done: false},
            {id: 3, name: 'Buy fruits', done: false}
        ],
        sub: [
            {id: 0, name: "Buy sub-1"}, {id: 1, name: "Buy sub-2"}
        ]

    },
    {
        id: 2,
        name: "Category 3 Paint",
        todos: [
            {id: 0, name: 'Paint windows', done: false},
            {id: 1, name: 'Paint car', done: false},
            {id: 2, name: 'Paint house', done: false},
            {id: 3, name: 'Paint fruits', done: false}
        ]
    },
    {id: 3, name: "Category 4 Empty", todos: []}
];
let categories = categoriesRaw; // Immutable.List(categoriesRaw);


class App extends Component {

    constructor() {
        super();
        this.state = {
            isEdit: false,
            category: null,
            todo: null,
            actions: {
                onSetCategory: this.setCategoryHandler,
                onSetTodo: this.setTodoHandler,
                onEditTodo: this.editTodoHandler,
                onEditCategory: this.editCategoryHandler,
                onSaveTodo: this.saveTodoHandler,
                onAssignCategory: this.assignCategoryHandler,
                onAdd: this.addHandler, // for both category & todo
                onDelete: this.deleteHandler, //for category only
                onAddSubcategory: this.addSubCategoryHandler,
                onSearch: this.searchHandler
            }
        };
    }

    componentDidMount() {
        this.setCategoryHandler(categories[0]);
    }

    getId = (arr) => arr.length;

    getIndex = (arr, target) => arr.indexOf(target);

    setCategoryHandler = (category) => {
        this.setState({
            category: category,
            todo: category && category.todos ? category.todos[0] : null
        });
        console.log(this.state.category)
    };
    setTodoHandler = (todo) => {
        this.setState({
            todo: todo
        });
    };
    editTodoHandler = (todo) => {
        this.setState({
            todo: todo,
            isEdit: true
        });
    };
    editCategoryHandler = (name) => {
        const category = this.state.category;
        category.name = name;
        this.setState({
            category: category
        })
    };
    saveTodoHandler = (todo) => {
        this.setState({
            todo: todo,
            isEdit: false
        });
    };
    assignCategoryHandler = (categoryTo) => {
        let categoryFrom = this.state.category;
        const index = this.getIndex(categoryFrom.todos, this.state.todo);
        categoryFrom.todos.splice(index, 1);
        const todo = this.state.todo
        todo.id = categoryTo.todos.length;
        this.setTodoHandler(todo);
        categoryTo.todos = categoryTo.todos || [];
        categoryTo.todos.push(todo);
        this.setCategoryHandler(categoryTo);
    };

    addHandler = (name, target) => {
        const category = this.state.category;
        if (target === 'todo') {
            category.todos.unshift({
                name: name,
                id: this.getId(this.state.category.todos),
                description: '',
                done: false
            });
            this.setCategoryHandler(category);
        } else if (target === 'category') {
            const newCategory = {
                name: name,
                id: this.getId(categories),
                todos: []
            };
            categories.unshift(newCategory);
            this.setCategoryHandler(newCategory);
        }
    };

    addSubCategoryHandler = (category) => {
        category.sub = category.sub || [];
        const newSub = {
            name: 'New sub',
            id: this.getId(category.sub),
            todos: []
        };
        category.sub.unshift(newSub);
        this.setCategoryHandler(newSub);
        return newSub;
    };

    deleteHandler = (deleteCategory) => {
        const traverse = (arr, item) => {
            const ind = arr.indexOf(item);
            if (ind > -1) {
                arr.splice(ind, 1);
                return;
            } else {
                return arr.map(a => a.sub ? traverse(a.sub, item) : null);
            }
        };
        traverse(categories, deleteCategory);
        let currentCategory = this.state.category;
        if (deleteCategory === currentCategory) {
            currentCategory = categories[0]
        }
        // todo is it ok to refresh through calling setState()?
        this.setCategoryHandler(currentCategory);
    };

    searchHandler = (search, done) => {
        // todo "done" doesnt work: "done" is lost after categories=[new]
        const traverse = (item) => {
            item.todos = item.todos || [];
            item.todos = item.todos.filter(todo => {
                return todo.name.toLocaleLowerCase().indexOf(search) > -1
                && (done ? todo.done == done : true)
            });
            const match = item.todos.length > 0 ? true : false;
            if (item.sub) {
                return match || traverse(item.sub);
            }
            else return match;
        };
        // todo: whois a fool
        //categories = Object.assign({}, categoriesRaw);
        //categories = categoriesRaw.slice(0);
        categories = JSON.parse(JSON.stringify(categoriesRaw));
        categories = categories.filter(cat => traverse(cat));
        //todo
        //todo
        //todo
        //todo
        //todo: must be other way to refresh view
        this.setCategoryHandler(categories[0]);
        console.log(categories)
    };

    render() {
        const getTodoList = () => {
            if (!this.state.category || !this.state.category.todos)
                return [];
            return this.state.category.todos;
        };
        const top = this.state.isEdit
              ? <div className="header">
                  <h1>{this.state.todo.name}</h1>
                  <h5>{this.state.category.name}</h5>
              </div>
              : <div>
                  <Header actions={this.state.actions}/>
                  <Progress />
                  <div className="row add-new">
                      <div className="col-sm-6"><AddNew for="category" actions={this.state.actions}/></div>
                      <div className="col-sm-6"><AddNew for="todo" actions={this.state.actions}/></div>
                  </div>
              </div>;

        const left = <Category categories={categories}
                               category={this.state.category}
                               actions={this.state.actions}
                               isEdit={this.state.isEdit}/>;
        const right = this.state.isEdit
              ? <TodoEdit todo={this.state.todo}
                          actions={this.state.actions}/>
              : <TodoList todos={getTodoList()}
                          todo={this.state.todo}
                          actions={this.state.actions}
                          isEdit={this.state.isEdit}/>;


        return (<div className="App">
            {top}
            <div className="row tasks">
                <div className="category col-sm-6">
                    {left}
                </div>
                <div className="todo col-sm-6">
                    {right}
                </div>
            </div>
        </div>);
    }
}

export default App;
