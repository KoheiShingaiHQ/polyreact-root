import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <koheishingai-header title="koheishingai"></koheishingai-header>
        <koheishingai-top-main></koheishingai-top-main>
        <koheishingai-footer></koheishingai-footer>
      </div>
    );
  }
}

export default App;
