import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  increment() {
    // this.setState(
    //   {
    //     counter: this.state.counter + 1,
    //   },
    //   () => {
    //     console.log("CallBck Value:", this.state.counter);
    //   }
    // );
    // console.log(this.state.counter);
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>Counter = {this.state.counter}</div>
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          Count by 1
        </button>
      </div>
    );
  }
}

export default Counter;
