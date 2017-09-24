import React, { Component } from 'react';
import './App.css';
import Clock from 'react-live-clock';
import Clocka from './clocka';


class App extends Component {
  render() {
    return (
      <div className="App">

        <p className="App-intro">
         Kell on praegu:
            <Clock />
            <Clocka/>
        </p>
      </div>
    );
  }
}

export default App;
