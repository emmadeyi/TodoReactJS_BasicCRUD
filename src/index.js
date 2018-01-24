import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { addTaskToTodos } from './actions';
import uuid from 'uuid';


const store = createStore(rootReducer);
console.log("store.getState()", store.getState());

store.subscribe(() => console.log('store', store.getState()));

let task = {
  id: uuid.v1(),
  title : "Database design for react todo app",
  date : "31/01/2018",
  progress : "33",
  selected: false
}

store.dispatch(addTaskToTodos(task));

ReactDOM.render(
  <Provider store={store} > 
    <App />
  </Provider>, 
  
  document.getElementById('root')

);
