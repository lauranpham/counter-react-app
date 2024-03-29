import React, { Component } from "react";

class Counter extends Component {
  styles = {
    badge:  {
      // fontSize: 10,
      fontWeight: "bold",
    },
    button: {
      marginRight: "10px",
    }
  };
  render() {
    return (
      <div>
        {this.props.children}
        <div className="row my-2">
          <span style={this.styles.badge} className={this.getBadgeClasses()}>
            {this.formatValue()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm" style={this.styles.button}
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm" style={this.styles.button}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm" style={this.styles.button}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
