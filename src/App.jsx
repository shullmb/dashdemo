import React, { Component } from 'react';
import { Meter } from './components/Meter';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, Dashboard!</h1>
        <h3>Progress Meter</h3>
        <Meter width={27} />
      </div>
    )
  }
}

export default App;
