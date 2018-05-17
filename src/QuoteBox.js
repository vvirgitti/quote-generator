import React from 'react';
import axios from 'axios';
import './App.css';

export class Quote extends React.Component {
  constructor () {
    super ()
    this.state = {
      quote: '',
      author: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    return axios.get('https://talaikis.com/api/quotes/random')
    .then(response => {
      const quoteAndAuthor = {
        quote: response.data.quote,
        author: response.data.author
      }
      return this.setState({quote: quoteAndAuthor.quote, author: quoteAndAuthor.author})
    })
  }

  render () {
    return (
      <div className="Box">
        <button className="Button" onClick={this.handleClick}>New Quote</button>
        <h2>"{this.state.quote}"</h2>
        <h3>{this.state.author}</h3>
      </div> 
    );
  }
}
