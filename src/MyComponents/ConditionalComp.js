import React, { Component } from "react";

class ConditionalComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // return this.state.isLoggedIn ? (
    //   <div>Logged in</div>
    // ) : (
    //   <div>Not Logged In</div>
    // );
    return this.state.isLoggedIn && <div>Welcom</div>;
  }
}

export default ConditionalComp;
