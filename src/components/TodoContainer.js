import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class TodoContainer extends Component{
  
  render(){    
    return(
      <div className="col-md-8 my-2">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default TodoContainer;