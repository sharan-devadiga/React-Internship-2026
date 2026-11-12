import React from "react";
import NewComponent from "./NewComponent";

function Greeting() {
  let greetmsg = "Good Morning ";
  return (
    <div>
      <h1>Greeting Page</h1>
      <NewComponent message={greetmsg} />
    </div>
  );
}

export default Greeting;
