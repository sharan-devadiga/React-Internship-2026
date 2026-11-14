import React, { useEffect } from "react";
import { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  console.log(count);

  let handleCount = () => {
    setCount(count + 1);
  };
  let handleCount1 = () => {
    setCount(count - 1);
  };

  //   useEffect(() => {
  //     console.log("UseEffect Loaded", count);
  //   }, [count]);

  useEffect(() => {
    document.title = `Count Changing:${count}`;
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>Count ++</button>
      {/* <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Count --
      </button> */}
      <button onClick={handleCount1}>Count --</button>
    </div>
  );
}

export default Hooks;
