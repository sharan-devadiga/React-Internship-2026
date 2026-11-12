import React from "react";

function NewComponent(props) {
  return (
    <div>
      <h1>New Comp</h1>
      <p>Hello {props.message}</p>
    </div>
  );
}

export default NewComponent;
