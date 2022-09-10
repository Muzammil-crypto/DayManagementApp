import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      audio: "Hello",
    };
    // this.changeText = this.changeText.bind(this);
  }
  changeText = () => {
    this.setState({
      audio: "Good Bye!!!",
    });
    console.log("button pressed");
  };
  render() {
    return (
      <div>
        <div>{this.state.audio}</div>
        {/* <button onClick={this.changeText.bind(this)}>Click me</button> */}
        {/* <button
          onClick={() => {
            this.changeText();
          }}
        >
          Click me
        </button> */}
        {/* <button onClick={this.changeText}>Click me</button> */}
        <button onClick={this.changeText}>Click me</button>
      </div>
    );
  }
}

export default EventBind;
