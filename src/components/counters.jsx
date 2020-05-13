import React, { Component } from "react";
import Counter from "./counter";

// controlled components since state was lifted to App
class Counters extends Component {
  render() {
    // destructure props if there are many props
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      // onDelete for the name of event in child and handleDelete for handling in parent
      <div className="container">
        <button onClick={onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map((counter) => (
          // value and selected are props that pass to Counter from Counters
          // Can render children to a component but changing it from a self closing tag to ...
          // useful for passing bigger and dynamic element e.g. dialogue box.
          <Counter
            key={counter.id}
            // value={counter.value}
            onDelete={onDelete}
            onIncrement={onIncrement}
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
