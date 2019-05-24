import React, { Component } from 'react';
import { Meter } from './components/Meter';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        meters: [3,33,66,100]
      }
    }
  }

  render() {
    const meters = this.state.data.meters.map( (value, i) => <Meter value={value} />)
    return (
      <div className="container">
        <h1>Hello, Dashboard!</h1>
        <h3>Progress Meters</h3>
        {meters}
      </div>
    )
  }
}

export default App;
