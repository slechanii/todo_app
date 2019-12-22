import React, { Component } from 'react';
import './App.css';
import BoardView from './components/BoardView';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardView></BoardView>
      </div>
    );
  }
}

export default App;
