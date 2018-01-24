import uuid from 'uuid';
import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO, SELECT_TODO, UPDATE_TODO } from '../actions'

const todosData = [
  {
    id: uuid.v1(),
    title : "Develope Backend sync for react todo app",
    date : "12/01/2018",
    progress : "10",
    selected: false
  },
  {
    id: uuid.v1(),
    title : "Create frontend for react todo app",
    date : "12/01/2018",
    progress : "40",
    selected: false
  }
];

function todos(state = todosData, action){
  switch(action.type){
    case ADD_TODO:
      let todos = [...state, action.task];
      return todos;

    case DELETE_TODO:
      let tasks = [...state];
      let task = tasks.findIndex(task => task.id === action.id);
      tasks.splice(task, 1);                
      return tasks;

    case UPDATE_TODO:      
      // let index = state.findIndex(task => task.id === action.id);
      // const currentTodos = [
      //   ...state.slice(0, index),
      //   {...state[index], progress: action.value},
      //   ...state.slice(index + 1)
      // ];
      // return currentTodos;
      return state.map(todo => manageTodo(todo, action))
      
    default:
      return state;
  }
}

function manageTodo(state, action){
  switch(action.type){
    case UPDATE_TODO:
      if(state.id !== action.id){
        return state;
      }
      return {
        ...state,
        progress: action.value
      }
    case SELECT_TODO:
      if(state.id === action.task.id && state.progress === action.task.progress){
        return state;
      }  
      let todo = action.task;
      return todo;
    default:
      return state;
  }
}

function selectedTodo(state = [], action){
  switch(action.type){
    case SELECT_TODO:
      return manageTodo(state, action);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos: todos,
  selectedTodo: selectedTodo
})

//using selector to compute derived data

export const selectTodo = (state) => {
  const todos = state.todos;
  const select = state.selectedTodo; 

  return todos.find(todo => todo.id === select.id);
}

export default rootReducer;

