import React from 'react'
import TodoList from  "./TodoList";
import TodoForm from  "../Todo/TodoForm";

var todoItems: any = [];
// todoItems.push({index: 1, value: "learn react", done: false});
// todoItems.push({index: 2, value: "Go shopping", done: true});
// todoItems.push({index: 3, value: "buy flowers", done: true});

interface IProps {

}

interface IState {
    todoItems?: any[]
}

function TodoHeader(){
    return <h1>Todo list</h1>;
}

class TodoApp extends React.Component<IProps, IState> {
    constructor (props: IProps) {
      super(props);
      this.state = {
        todoItems : []
      };
    }

    addItem = (todoItem : any) => {
      if(todoItems !== undefined && todoItems !== null && todoItems !== ""){
      todoItems.unshift({
        index: todoItems.length+1, 
        value: todoItem.newItemValue, 
        done: false
      });
    }
      this.setState({todoItems: todoItems});
    }

    removeItem = (itemIndex: any) => {
      todoItems.splice(itemIndex, 1);
      this.setState({todoItems: todoItems});
    }
    markTodoDone = (itemIndex: any) => {
      var todo = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
      this.setState({todoItems: todoItems});  
    }

    render() {
      return (
        <div id="main">
            <TodoHeader /> 
            <TodoList items={todoItems} 
            removeItem={this.removeItem} 
            markTodoDone={this.markTodoDone} />
            <TodoForm addItem={this.addItem} />
        </div>
      );
    }
  }
  
  export default TodoApp;
  