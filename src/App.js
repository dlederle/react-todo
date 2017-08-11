import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Basic React TODO App</h2>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
