import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTaskFromTodos, selectTask } from '../actions';

class TodoItem extends Component{
  
  select(task){
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
      <li className="list-group-item"  >
        <div className="row">
          <div className="col-md-6 my-2" onClick={this.select.bind(this, task)}>
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
                <button className="btn btn-sm btn-danger"><i className="fa fa-trash-o" onClick={() => this.props.deleteTaskFromTodos(task.id)}></i></button>
              </div>
            </div>            
          </div>
        </div>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteTaskFromTodos, selectTask}, dispatch);
}


export default connect(null, mapDispatchToProps)(TodoItem);