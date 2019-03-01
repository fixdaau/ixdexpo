import React, { Component } from "react";

import ReactCardFlip from "react-card-flip";
import "./Card.scss";

class Card extends Component {
  state = {
    isFlipped: false
  };

  handleClick = event => {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  handleFlip = shouldFlip => {

    this.setState({ isFlipped: shouldFlip })
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div
          className="flip-card-wrapper"
          // onMouseOver={() => this.handleFlip(true)}
          onMouseEnter={() => this.setState({ isFlipped: true })}
          key="front"
        >
          {this.props.front}
        </div>
        <div
          onMouseLeave={() => this.handleFlip(false)}
          // onMouseOut={() => this.handleFlip(false)}
          className="flip-card-wrapper"
          key="back"
        >
          {this.props.back}
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
