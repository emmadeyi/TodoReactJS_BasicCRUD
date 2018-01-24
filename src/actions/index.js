export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SELECT_TODO = "SELECT_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTaskToTodos(task){
  //create action object to hold the action type and params for the action
  const action = {
    type: ADD_TODO,
    task: task
  }

  return action;
}

export function deleteTaskFromTodos(id){
  const action = {
    type: DELETE_TODO,
    id: id
  }
  return action;
}

export function selectTask(task){
  const action ={
    type: SELECT_TODO,
    task: task
  }
  return action;
}

export function updateTask(id, value){
  const action = {
    type: UPDATE_TODO,
    id: id,
    value: value
  }
  return action;
}