import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tabs from './Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Tabs>
          <div tabname="Bilde 1">
            Dette er bilde 1
          </div>
          <div tabname="Bilde 2">
            Dette er bilde 2
          </div>
          <div tabname="Bilde 3">
            Dette er bilde 3
          </div>
          <div tabname="Bilde 4">
            Dette er bilde 4
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
