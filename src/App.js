import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

const initialCounters = [
  { id: 1, value: 4, },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: initialCounters,
    };
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value === 0) return
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = initialCounters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
