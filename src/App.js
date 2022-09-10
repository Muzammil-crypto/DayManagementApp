import React from "react";
import Counter from "./MyComponents/Counter";
// import Greet from "./MyComponents/Greet";
// import Message from "./MyComponents/Message";

function App() {
  return (
    <div className="ui container">
      {/* <Greet name="Muzammil">
        <div>
          {" "}
          <button className="ui button red">Submit on Clieck</button>
        </div>
      </Greet> */}

      <Counter />
    </div>
  );
}

export default App;
