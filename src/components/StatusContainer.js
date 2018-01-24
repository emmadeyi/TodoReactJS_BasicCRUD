import React, { Component } from "react"

import Status from './Status';
import UpdateProgress from './UpdateProgress';

class StatusContainer extends Component{
  render(){  
    return(
      <div className="col-md-4 my-2">
        <UpdateProgress/>
        <Status />
      </div>
    );
  }
}

export default StatusContainer;