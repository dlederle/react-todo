import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = props.todo;
    this.todoToggle = this.todoToggle.bind(this);
  }

  todoToggle(e) {
    const complete = !this.state.complete;
    this.setState({ complete });
  }

  render() {
    return (
      <li>
        <input
          className="todo-toggle"
          type="checkbox"
          onChange={this.todoToggle}
        />
        <span>{this.state.text}</span>
      </li>
    );
  }
}

export default Todo;
