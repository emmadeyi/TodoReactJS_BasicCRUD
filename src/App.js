import React, { Component } from 'react';
import Nav from './components/Nav';
import StatusContainer from './components/StatusContainer';
import TodoContainer from './components/TodoContainer';
import uuid from 'uuid';


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      selectedTodo: [],
    }
  }

  componentWillMount(){
    //use this or componentDidMount to fetch default data and set state
    this.setState({
      todos: [
        {
          id: uuid.v1(),
          title : "Develope Backend sync for react todo app",
          date : "12/01/2018",
          progress : "10"
        },
        {
          id: uuid.v1(),
          title : "Create frontend for react todo app",
          date : "12/01/2018",
          progress : "40"
        }
      ]
    })

    this.addTaskToTodos = this.addTaskToTodos.bind(this);
    this.deleteTaskFromTodos = this.deleteTaskFromTodos.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.updateTaskProgress = this.updateTaskProgress.bind(this);
  }

  addTaskToTodos(task){
    let todos = this.state.todos;
    todos.push(task);
    this.setState({
      todos: todos
    });
    console.log('====================================');
    console.log(this.state);
    console.log('====================================');
  }

  deleteTaskFromTodos(id){
    let todos = this.state.todos;
    let index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
    console.log('====================================');
    console.log("Deleted: "+id);
    console.log('====================================');
  }

  selectTodo(task){   
    this.setState({
      selectedTodo: task
    });
    return this.state.selectedTodo;
  }

  updateTaskProgress(id, value){
    let todos = this.state.todos;
    let task;

    for(let i = 0; i < todos.length; i += 1){
      let todo = todos[i];
      if(todo.id === id){
        task = todo;
        task.progress = value;
      }
    }
    this.setState({
      todos: todos
    });        
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <section id="main-header">
          <div className="container mt-3 mb-3">
            <div className="row">
              <TodoContainer selectTodo={this.selectTodo} addTask={this.addTaskToTodos} deleteTask={this.deleteTaskFromTodos} todos={this.state.todos}/>
              <StatusContainer taskDetails={this.state.selectedTodo} updateTask={this.updateTaskProgress}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
