import React from "react";
import Greet from "./MyComponents/Greet";

function App() {
  return (
    <div className="ui container">
      <Greet name="Muzammil">
        <div>
          {" "}
          <button className="ui button red">Submit on Clieck</button>
        </div>
      </Greet>
    </div>
  );
}

export default App;
