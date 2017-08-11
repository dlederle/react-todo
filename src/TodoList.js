import React, { Component } from "react";
import Todo from "./Todo.js";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      //Is this the right way to track IDs without a DB / Backend?
      currID: 0,
      newTodo: "",
      todos: []
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  inputChanged(e) {
    this.setState({ newTodo: e.target.value });
  }

  addTodo(e) {
    if (this.state.newTodo) {
      const tmpTodo = {
        text: this.state.newTodo,
        id: this.state.currID,
        complete: false
      };
      const todos = this.state.todos.concat([tmpTodo]);
      const currID = this.state.currID + 1;
      const newTodo = "";
      this.setState({
        todos,
        currID,
        newTodo
      });

      document.getElementById("todo-input").value = "";
    }
  }

  render() {
    const todoInput = (
      <input
        id="todo-input"
        className="new-todo-form"
        type="text"
        onChange={this.inputChanged}
      />
    );
    const todoSubmit = (
      <button className="add-todo" onClick={this.addTodo}>Add new Todo</button>
    );
    const stillTodo = [];
    const completed = [];
    this.state.todos.forEach(todo => {
      let tmp = <Todo todo={todo} key={todo.id} />;
      todo.complete ? completed.push(tmp) : stillTodo.push(tmp);
    });
    return (
      <div className="todo-list">
        <div className="todo-controls">
          {todoInput}
          {todoSubmit}
        </div>
        <h3>Still Todo</h3>
        <ul>{stillTodo}</ul>
        <h3>Completed:</h3>
        <ul>{completed}</ul>
      </div>
    );
  }
}

export default TodoList;
