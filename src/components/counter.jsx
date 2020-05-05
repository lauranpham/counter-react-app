import React, { Component } from "react";
// imrc tab

// cc tab
class Counter extends Component {
  state = {
    count: 0,
    // generates a random 200 x 200 photo
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  // can add styles directly into jsx as an object. font size compiles to px
  // pass as style= {this.styles}
  // alternatively inline style= {{fontSize: 10, fontWeight:"bold"}}
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  // event handlers are named handle... and are arrow functions to bind event handler to this
  handleIncrement = () => {
    // Helps with debugging
    console.log("Increment clicked", this);
    // nothing is passed from event. Just need to increment the count state
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    // variables within render can be called without this.
    // highlight method lines and refactor --> extract to method in class 'Counter'
    // takes out lines into a new method and replaces with method call
    // let classes = this.getBadgeClasses();
    return (
      // events like onClick, onKeyDown, onKeyPress etc.
      // react.fragment removes div
      // {} allows you to add js into jsx
      // Bootstrap can be applied directly without reactstrap
      // (list can be mapped with a unique key)
      // logical && operator can be used for non booleans since strings are considered truthy and returns the second operand
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // append different classes depending on the state
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // Can utilise the key values of an object using {}
    const { count } = this.state;
    // jsx expressions get compiled to react elements and can be passed to functions
    // and variables
    return count === 0 ? "Zero" : count;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
