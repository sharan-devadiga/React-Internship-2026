import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { name } from "./utils/constants";
import HelloWorld from "./pages/Hello";
import NewComponent from "./pages/NewComponent";
import Greeting from "./pages/Greeting";

function App() {
  let a = 30;
  let b = 20;
  let text = "";
  if (a > b) {
    text = "A is Greater";
  } else {
    text = "B is Greater";
  }
  return (
    <>
      {/* <h1>Hello {name}</h1>
      <p>Result {text}</p> */}
      {/* <div>
      <h1>React is {5 + 5} times better with JSX</h1>
       </div> */}

      {/* <p>{a > b ? "A is greater" : "B is Greater"}</p>
      <HelloWorld /> */}
      <Greeting />
    </>
  );
}

export default App;
