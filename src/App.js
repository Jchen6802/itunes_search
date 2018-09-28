import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the iTunes searcher</h1>
        </header>
        <input
            type="search"
            placeholder="Search by name"/>
        <button>Search</button>
      </div>
    );
  }
}

export default App;
