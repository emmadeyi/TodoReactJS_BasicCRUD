import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { connect } from 'react-redux';

class TodoList extends Component{  

  render(){
    
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return(
          <TodoItem key={todo.title} task={todo}/>
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

function mapStateToProps(state){
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, null)(TodoList);