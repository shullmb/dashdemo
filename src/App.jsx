import React, { Component } from 'react';
import { Meter } from './components/Meter';
import { MultiMeter } from './components/MultiMeter';

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
    const meters = this.state.data.meters.map( (value, i) => <Meter key={i} value={value} />)
    return (
      <div className="container">
        <h1>Hello, Dashboard!</h1>
        <h3>Progress Meters</h3>
        {meters}
        <h3>MultiMeters</h3>
        <MultiMeter />
        <MultiMeter />
        <MultiMeter />
      </div>
    )
  }
}

export default App;
