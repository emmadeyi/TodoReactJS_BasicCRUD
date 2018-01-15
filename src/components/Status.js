import React, { Component } from "react";

class Status extends Component{
  render(){
    let task, progress;
    if(this.props.taskDetails){
      task = this.props.taskDetails;
      progress = {width: task.progress+"%"};
    }
    return(
      <div className="card my-2">
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
    );
  }
}

export default Status;