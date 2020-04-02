import React, { Component } from 'react';
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

class TodoApp extends Component {
    render() {
        return (
            <div className="container">
                <TodoList />
                <TodoForm />
            </div>
        );
    }
}

export default TodoApp;
