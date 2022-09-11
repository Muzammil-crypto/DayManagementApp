import React from "react";
import ConditionalComp from "./MyComponents/ConditionalComp";
// import EventBind from "./MyComponents/EventBind";
import ParentComponent from "./MyComponents/ParentComponent";
// import Counter from "./MyComponents/Counter";
// import FucntionClick from "./MyComponents/FucntionClick";
// import Greet from "./MyComponents/Greet";
// import Message from "./MyComponents/Message";

function App() {
  function greetChild() {
    alert(`Hello Child`);
  }
  return (
    <div className="ui container">
      {/* <Greet name="Muzammil">
        <div>
          {" "}
          <button className="ui button red">Submit on Clieck</button>
        </div>
      </Greet> */}

      {/* <EventBind /> */}
      {/* <ParentComponent childGreetHandler={greetChild} /> */}
      <ConditionalComp />
    </div>
  );
}

export default App;
