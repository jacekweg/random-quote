import "./scss/App.scss";
import React from "react";
import { connect } from "react-redux";
import quotesJSON from "./quotes.json";
import { NEWQUOTE } from "./index";

const newQuote = (newQuote) => {
  return {
    type: NEWQUOTE,
    quote: [...newQuote],
  };
};

class MainBox extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
    this.getQuote();
  }

  getQuote() {
    if (quotesJSON === undefined) {
      return;
    }
    let randomIndex = Math.floor(Math.random() * quotesJSON["quotes"].length);
    let quote = quotesJSON["quotes"][randomIndex]["quote"];
    let author = quotesJSON["quotes"][randomIndex]["author"];
    this.props.getNewQuote({ quote, author });
  }

  render() {
    let quote;
    let author;
    if (this.props.fullQuote !== undefined) {
      quote = this.props.fullQuote.quote;
      author = this.props.fullQuote.author;
    } else {
      quote = "Quote not found";
      author = "Error";
    }
    return (
      <div id="quote-box">
        <p id="text">{quote}</p>
        <p id="author">- {author}</p>
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
    );
  }
}

const mapStateToProps = (state) => {
  return { fullQuote: state.quotes[0] };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewQuote: (...quote) => {
      dispatch(newQuote(quote));
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(MainBox);

export default Container;
