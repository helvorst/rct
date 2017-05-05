import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import './App.css';
import View from './pages/view/view.component';
import Edit from './pages/edit/edit.component';
import Header from './comps/header/header.component';
import Search from './shared/search/search.component';
import Split from './shared/split/split.component';

//const {Map, List, fromJS} = require('immutable');


const App = () => {

    const headerLeft = <Header title="Todo app"/>;
    const headerRight = <Search/>;
    return (
      <div className="App">
        <Split left={headerLeft}
               right={headerRight}/>
        <Router history={browserHistory} >
          <Route path="/"
                 component={View}/>
          <Route path="/edit/:category/:todo"
                 component={Edit}/>
        </Router>
      </div>);

};
export default App;

