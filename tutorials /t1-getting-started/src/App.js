import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//A React component — in its simplest form — is a plain-old JavaScript function:
function Button (props) {
  // Returns a DOM element here. For example:
  return <button type="submit">{props.label}</button>;
}

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
        <Button label="Save" />
      </div>
    );
  }
}

export default App;
