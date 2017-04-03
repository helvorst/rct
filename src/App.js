import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './comps/course/course.component';
import Header from './comps/header/header.component';
import Progress from "./comps/progress/progress.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Progress/>
        <Course/>
      </div>
    );
  }
}

export default App;
