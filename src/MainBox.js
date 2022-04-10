import './App.css';
import React from 'react';

class MainBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            quote: ''
        }
    }
    render() {
    return(
        <div id="main-window">
            <div id="quote-box">
                <p id="text">Test</p>
                <p id="author">- Marian</p>
                <button id="new-quote">New quote!</button>

                <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">tweet it!</a>
            </div>
        </div>
    )};
}

export default MainBox;
