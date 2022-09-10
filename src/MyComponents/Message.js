import React from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      Message: "Subscribe to login ",
    };
  }
  changeText() {
    this.setState({
      Message: "You logged in successfully",
    });
  }
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>{this.state.Message}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "5vh",
          }}
        >
          <button
            onClick={() => {
              this.changeText();
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    );
  }
}
export default Message;
