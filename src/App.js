import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>歡迎使用譚小七請款產生器</h1>
          <h2>Welcome to LittleSeven Give Me Money</h2>
        </div>
        <div className="App-body">
          <label>請在此輸入文字</label>
          <input placehoder="yoooo"></input>
          <button>產生</button>
        </div>
      </div>
    );
  }
}

export default App;
