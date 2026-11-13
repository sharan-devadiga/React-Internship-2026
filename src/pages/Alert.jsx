import React from "react";

function Alert() {
  let Greet = (e) => {
    alert(e);
  };
  return (
    <div>
      <button
        onClick={() => {
          Greet("Hello Sharan");
        }}
      >
        Say Hello
      </button>
      {/* onClick={function_name} */}
    </div>
  );
}

export default Alert;
