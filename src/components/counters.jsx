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

  handleIncrement = () => {
    // Helps with debugging
    console.log("Increment clicked", this);
    // nothing is passed from event. Just need to increment the value state
    // setState updates the view
    this.setState({
      value: this.props.counter.value + 1,
    });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // key and value is the same, can just write counters
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      // onDelete for the name of event in child and handleDelete for handling in parent
      <div className="container">
        <button className="btn btn-primary btn-sm" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map((counter) => (
          // value and selected are props that pass to Counter from Counters
          // Can render children to a component but changing it from a self closing tag to ...
          // useful for passing bigger and dynamic element e.g. dialogue box.
          <Counter
            key={counter.id}
            // value={counter.value}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            // id={counter.id}
            // counter encapsulates all properties of counter i.e. id and value
            counter={counter}
          >
            <h3>Counter #{counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
