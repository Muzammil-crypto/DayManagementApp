import React from "react";

const Greet = (props) => {
  return (
    <div>
      Hello {props.name}
      {props.children}
    </div>
  );
};
export default Greet;
