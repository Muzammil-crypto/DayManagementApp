import React from "react";
import EventBind from "./MyComponents/EventBind";
// import Counter from "./MyComponents/Counter";
// import FucntionClick from "./MyComponents/FucntionClick";
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

      <EventBind />
    </div>
  );
}

export default App;
