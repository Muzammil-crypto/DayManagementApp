import React from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      Message: "Subscribe to login ",
    };
  }
  render() {
    return <div> {this.state.Message} </div>;
  }
}
export default Message;
