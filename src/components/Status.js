import React, { Component } from "react";
import { connect } from 'react-redux';
import { selectTodo } from '../reducers';

class Status extends Component{
  render(){
    let task, progress, status;    
    if(this.props.selected){
      task = this.props.selected;
      progress = {width: task.progress+"%"};
      status = <div className="card my-2">
        <div className="card-header">{task.title} </div>
        <div className="card-body">
          <ul className="list-group text-left">
            <li className="list-group-item">Due: {task.date}</li>
            <li className="list-group-item">Current %: {task.progress}
              <div className="progress">
                <div className="progress-bar bg-dark progress-bar-striped" id="progressBarUpdate" role="progressbar" style={progress} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    }else{
      status = <div className="card my-2">
        <div className="card-header">No Task Selected</div>
        <div className="card-body">
          <em>Click on a task to see stats</em>
        </div>
      </div>
    }
    return(
        <div>
          { status }
        </div>              
    );
  }
}

function mapStateToProps(state){
  return {
    task: state.selectedTodo,
    selected: selectTodo(state)
  }
}

export default connect(mapStateToProps, null)(Status);