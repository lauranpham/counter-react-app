import React, { Component } from "react";
// imrc tab

// cc tab
class Counter extends Component {
  state = {
    value: this.props.value,
    // generates a random 200 x 200 photo
    // imageUrl: "https://picsum.photos/200",
    // tags: ["tag1", "tag2", "tag3"],
  };
  // can add styles directly into jsx as an object. font size compiles to px
  // pass as style= {this.styles}
  // alternatively inline style= {{fontSize: 10, fontWeight:"bold"}}
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  // event handlers are named handle... and are arrow functions to bind event handler to this
  // arrow function inherits automatically
  // or this.handleIncrement = this.handleIncrement.bind(this) in constructor
  handleIncrement = () => {
    // Helps with debugging
    console.log("Increment clicked", this);
    // nothing is passed from event. Just need to increment the value state
    // setState updates the view
    this.setState({
      value: this.state.value + 1,
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
      <div className="row my-2">
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatValue()}
        </span>
        <button
          onClick={this.handleIncrement}
          // onClick={() => this.handleIncrement(product)} use arrow function to event to pass argument that are not this
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // append different classes depending on the state
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    // Can utilise the key values of an object using {}
    const { value } = this.state;
    // jsx expressions get compiled to react elements and can be passed to functions
    // and variables
    return value === 0 ? "Zero" : value;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
