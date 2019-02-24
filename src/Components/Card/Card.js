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

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div
          className="card"
          onMouseOver={() => this.setState({ isFlipped: true })}
          key="front"
        >
          {this.props.front}
        </div>
        <div
          onMouseLeave={() => this.setState({ isFlipped: false })}
          className="card"
          key="back"
        >
          {this.props.back}
        </div>
      </ReactCardFlip>
    );
  }
}

export default Card;
