import "./scss/App.scss";
import React from "react";
import { connect } from "react-redux";
// import quotesJSON from "./quotes.json";
import { NEWQUOTE } from "./index";

export const REQUESTING_DATA = "REQUESTING_DATA";
export const RECEIVED_DATA = "RECEIVED_DATA";

const newQuote = (newQuote) => {
  return {
    type: NEWQUOTE,
    quote: newQuote.quote,
    author: newQuote.author,
  };
};

const defaultState = {
  fetching: false,
  quotes: [],
};

export const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        quotesJson: [],
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        quotesJson: action.quotes,
      };
    default:
      return state;
  }
};

class MainBox extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
    this.getQuote();
  }

  getQuote() {
    if (
      this.props.quotesJSON[0] === undefined ||
      this.props.quotesJSON.isEmpty
    ) {
      return;
    }

    let randomIndex = Math.floor(Math.random() * this.props.quotesJSON.length);
    let quote = this.props.quotesJSON[randomIndex]["quote"];
    let author = this.props.quotesJSON[randomIndex]["author"];
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
  return { quotesJSON: state.request.quotesJson, fullQuote: state.quotes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewQuote: (quote) => {
      dispatch(newQuote({ quote: quote.quote, author: quote.author }));
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(MainBox);

export default Container;
