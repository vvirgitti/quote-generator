import React, { Component } from 'react';
import { Quote } from './QuoteBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the random quote generator</h1>
        </header>
        <p className="App-intro">
          Quote of the day:
        </p>
        <Quote />
      
      </div>
    );
  }
}

export default App;
