import React, { Component } from "react";

class TodoItem extends Component{
  

  deleteTask(id){
    this.props.deleteTask_passFinal(id);
  }

  selectTask(task){
    this.props.selectTask(task);
  }

  render(){
    let task;
    if(this.props.task){
      task = this.props.task;
    }    
    let progress = task.progress;
    let progress_style_width = { width : progress+"%" };   

    return(      
      <li className="list-group-item" onClick={this.selectTask.bind(this, task)} >
        <div className="row">
          <div className="col-md-6 my-2" >
            {task.title}
                </div>
          <div className="col-md-6 my-2">
            <div className="row">
              <div className="col-md-9 my-2">
                <div className="progress">
                  <div className="progress-bar bg-dark progress-bar-striped" id="bar-width" style={progress_style_width} role="progressbar" aria-valuenow={task.progress} aria-valuemin="0" aria-valuemax="100">{task.progress}%</div>
                </div>
              </div>
              <div className="col-md-3">
                <button className="btn btn-sm btn-danger"><i className="fa fa-trash-o" onClick={this.deleteTask.bind(this, task.id)}></i></button>
              </div>
            </div>            
          </div>
        </div>
      </li>
    );
  }
}

export default TodoItem;