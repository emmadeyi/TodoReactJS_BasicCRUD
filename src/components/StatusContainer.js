import React, { Component } from "react"

import Status from './Status';
import UpdateProgress from './UpdateProgress';

class StatusContainer extends Component{
  render(){    
    let taskDetails;
    if(this.props.taskDetails){
      taskDetails = this.props.taskDetails;
    }
    
    return(
      <div className="col-md-4 my-2">
        <UpdateProgress task={taskDetails} updateTask={this.props.updateTask}/>
        <Status taskDetails={taskDetails}/>
      </div>
    );
  }
}

export default StatusContainer;