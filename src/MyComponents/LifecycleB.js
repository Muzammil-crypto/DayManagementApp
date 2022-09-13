import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Muzammil",
    };
    console.log("Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("GetDerivedStateFromProps");

    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("Render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
