import React, { Component } from "react"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTask, selectTask } from '../actions';
import { selectTodo } from '../reducers';


class UpdateProgess extends Component{
  updateProgrss(e){
    e.preventDefault();
    let value;
    value = this.refs.newProgress.value;    
    this.props.updateTask(this.props.task.id, value);  
  }

  render(){
    if(this.props.task.progress){
      document.getElementById("progressInput").value = this.props.selected.progress;
    }
    
    return(
      <div className="card">
        <div className="card-header text-left text-white bg-secondary">Update Progress</div>
        <div className="card-body">
          <div className="row">
            <div className="col">
                <form onSubmit={this.updateProgrss.bind(this)}>
                  <div className="input-group my-2">
                    <input type="text" ref="newProgress" className="form-control" id="progressInput" placeholder="e.g 10"/>
                    <span className="input-group-btn"><button className="btn btn-secondary" onClick={this.updateProgrss.bind(this)}><i className="fa fa-upload"></i></button></span>
                  </div>  
                </form>
            </div>
          </div>
        </div>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateTask, selectTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProgess);