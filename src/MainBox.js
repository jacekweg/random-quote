import "./scss/App.scss";
import React from "react";
import { connect } from "react-redux";
import quotesJSON from "./quotes.json";
import { NEWQUOTE } from "./index";

const newQuote = (newQuote, newAuthor) => {
  return {
    type: NEWQUOTE,
    quote: newQuote,
    author: newAuthor,
  };
};

class MainBox extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    let randomIndex = Math.floor(Math.random() * quotesJSON["quotes"].length);
    let quote = quotesJSON["quotes"][randomIndex]["quote"];
    let author = quotesJSON["quotes"][randomIndex]["author"];
    // console.log("quote: " + quote + " author " + author);
    this.props.getNewQuote(quote, author);
  }

  render() {
    console.log("this.props.quote " + this.props.quotes);
    console.log("this.props.author " + this.props.stringify);
    return (
      <div id="main-window">
        <div id="quote-box">
          <p id="text">{this.props.quotes}</p>
          <p id="author">- {this.props.author}</p>
          <button id="new-quote" onClick={this.getQuote}>
            New quote!
          </button>
          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            rel="noreferrer"
            target="_blank"
          >
            tweet it!
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewQuote: (message) => {
      dispatch(newQuote(message));
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(MainBox);

export default Container;
