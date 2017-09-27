import React, { Component } from 'react';
import './App.css';
import Clock from 'react-live-clock';
import Clocka from './clocka';
import Temp from './temperatuur';


class App extends Component {
  render() {
    return (
      <div className="App">

        <p className="App-intro">
         Kell on praegu:
            <Clock />
            <Clocka/>
            <Temp/>
        </p>
      </div>
    );
  }
}

export default App;
