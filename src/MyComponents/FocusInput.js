import React, { Component } from "react";
import Input from "./input";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.compRef = React.createRef();
  }
  clickHanler = () => {
    this.compRef.current.focusInput();
  };

  render() {
    return (
      <div>
        {/* <Input /> */}
        <Input ref={this.compRef} />
        <button onClick={this.clickHanler}>Focus input</button>
      </div>
    );
  }
}

export default FocusInput;
