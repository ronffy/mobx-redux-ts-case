import React, { Component } from 'react';
import './App.css';
import Mobx from './mobx';
import Redux from './redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mobx className="fl-left" />
        <Redux className="fl-left" />
      </div>
    );
  }
}

export default App;
