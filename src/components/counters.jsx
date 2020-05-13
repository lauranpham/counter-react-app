import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = () => {
    // Helps with debugging
    console.log("Increment clicked", this);
    // nothing is passed from event. Just need to increment the count state
    // setState updates the view
    this.setState({
      value: this.props.value + 1,
    });
  };
  render() {
    return (
      <div className="container">
        {this.state.counters.map((counter) => (
          // value and selected are props that pass to Counter from Counters
          <Counter key={counter.id} value={counter.value} selected={true} />
        ))}
      </div>
    );
  }
}

export default Counters;
