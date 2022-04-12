import "./App.scss";
import React from "react";
import { connect } from "react-redux";
import { NEWQUOTE } from "./reducers/quotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const newQuote = (newQuote) => {
  return {
    type: NEWQUOTE,
    text: newQuote.text,
    author: newQuote.author,
  };
};

class MainBox extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    if (
      this.props.quotesJSON === undefined ||
      this.props.quotesJSON.length === 0
    ) {
      return;
    }

    let randomIndex = Math.floor(Math.random() * this.props.quotesJSON.length);
    let text = this.props.quotesJSON[randomIndex]["quote"];
    let author = this.props.quotesJSON[randomIndex]["author"];

    this.props.getNewQuote({ text, author });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.quotesJSON !== prevProps.quotesJSON) {
      this.getQuote();
    }
  }

  render() {
    let text;
    let author;
    if (this.props.fullQuote !== undefined) {
      text = this.props.fullQuote.text;
      author = this.props.fullQuote.author;
    } else {
      text = "Quote not found";
      author = "Error";
    }
    let link = `https://twitter.com/intent/tweet?hashtags=RandomQuote&text="${text}"+-+${author}`;
    return (
      <div id="quote-box">
        <p id="text">{text ? text : <br />}</p>
        <p id="author"> {author ? "- " + author : <br />}</p>

        <div id="options">
          <button id="new-quote" onClick={this.getQuote}>
            New quote!
          </button>
          <a id="tweet-quote" href={link} rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
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
      dispatch(newQuote({ text: quote.text, author: quote.author }));
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(MainBox);

export default Container;
