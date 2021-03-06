import React, { Component } from "react";
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addTaskToTodos } from '../actions';
import { bindActionCreators } from 'redux';

class TodoForm extends Component{
  constructor(){
    super();
    this.state = {
      newTodo: {}
    }
    this.submitTask = this.submitTask.bind(this);
  }

  submitTask(e){
    e.preventDefault();   
    if(this.refs.task.value === ""){
      alert("Enter Title in task field");
    }else{
      let task = {
        id: uuid.v1(),
        title : this.refs.task.value,
        date : this.refs.date.value,
        progress : this.refs.progress.value
      };
      this.props.addTaskToTodos(task);      
    }    
  }

  render(){
    return(
      <div className="card">
        <div className="card-header text-left text-white bg-secondary">Todos CRUD</div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <form onSubmit={this.submitTask}>
                <div className="row">
                  <div className="col-md-6 my-2">
                    <input type="text" className="form-control" ref="task" placeholder="Enter Tasks" />
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-8 my-2"><input type="date" ref="date" className="form-control" /></div>
                      <div className="col-md-4 my-2"><input type="text" ref="progress" className="form-control" placeholder="Progress" /></div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-block btn-outline-secondary" onClick={this.submitTask}>Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addTaskToTodos }, dispatch);
}

export default connect(null, mapDispatchToProps) (TodoForm);