import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component{  

  render(){
    
    let todoItems;
    if(this.props.todosList){
      todoItems = this.props.todosList.map(todo => {
        return(
          <TodoItem key={todo.title} task={todo} deleteTask_passFinal={this.props.deleteTask_pass} selectTask={this.props.selectTask}/>
        );
      })
    }else{
      todoItems = "Todos trail is empty";
    }

    return(
      <div className="card my-2 ">
        <div className="card-header text-left">Todos List</div>
        <div className="card-body">
          <ul className="list-group text-left">
            {todoItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;