import React, { Component } from 'react';
import Nav from './components/Nav';
import StatusContainer from './components/StatusContainer';
import TodoContainer from './components/TodoContainer';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav />
        <section id="main-header">
          <div className="container mt-3 mb-3">
            <div className="row">
              <TodoContainer />
              <StatusContainer/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
