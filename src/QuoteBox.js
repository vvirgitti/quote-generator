import React from 'react';
import axios from 'axios';
import './App.css';

export class Quote extends React.Component {
  constructor () {
    super ()
    this.state = {
      quote: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://quotes.rest/qod.json')
    .then(response => console.log(response))
  }

  render () {
    return (
      <div className="Box">
        <button className="Button" onClick={this.handleClick}>New Quote</button>
      </div> 
    );
  }
}
