import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MediaList from './MediaList.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nå er vi på</h1>
        </header>
        <p className="App-intro">
          Dæven, radio buttons!
        </p>

      <MediaList/>
    </div>
    );
  }
}

export default App;
