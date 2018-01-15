import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class TodoContainer extends Component{
  
  render(){    
    return(
      <div className="col-md-8 my-2">
        <TodoForm addTask_pass={this.props.addTask}/>
        <TodoList todosList={ this.props.todos } deleteTask_pass={this.props.deleteTask} selectTask={this.props.selectTodo}/>
      </div>
    );
  }
}

export default TodoContainer;