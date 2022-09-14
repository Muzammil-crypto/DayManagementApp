import React, { PureComponent } from "react";
// import Inline from "./MyComponents/Inline";
// import ConditionalComp from "./MyComponents/ConditionalComp";
// import StyleSheet from "./MyComponents/Stylesheet";
// import EventBind from "./MyComponents/EventBind";
// import ParentComponent from "./MyComponents/ParentComponent";
// import Counter from "./MyComponents/Counter";
// import FucntionClick from "./MyComponents/FucntionClick";
// import Greet from "./MyComponents/Greet";
// import Message from "./MyComponents/Message";
import "./appStyles.css";
import "./appStyles.modules.css";
import FragmentDemo from "./MyComponents/FragmentDemo";
// import Form from "./MyComponents/Form";
import LifecycleA from "./MyComponents/LifecycleA";
import Table from "./MyComponents/Table";

function App() {
  // function greetChild() {
  //   alert(`Hello Child`);
  // }
  return (
    <div>
      {/* <h1 className="Error">Error</h1>

      <h1 className="Success">Success</h1> */}

      {/* <Greet name="Muzammil">
        <div>
          {" "}
          <button className="ui button red">Submit on Clieck</button>
        </div>
      </Greet> */}

      {/* <EventBind /> */}
      {/* <ParentComponent childGreetHandler={greetChild} /> */}
      {/* <StyleSheet primery={true} /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      <PureComponent />
    </div>
  );
}

export default App;
