import React, { Component } from 'react';
import Clock from './components/clock/Clock';

class App extends Component {
  state = { showClock: false }

  toggleClock = () => {
    this.setState({ showClock: !this.state.showClock })
  }

  render() {
    const { showClock } = this.state
    return(
      <div>
        { showClock && <Clock />}
        <button onClick={this.toggleClock}>Toggle Clock</button>
      </div>
    )
  }
}

export default App;
