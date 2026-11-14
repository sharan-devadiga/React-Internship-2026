import React, { useState } from "react";

function Form() {
  const [name, SetName] = useState();

  let handleChange = (e) => {
    SetName(e.target.value);
    console.log(e.target.value);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <p>Onchanging Value: {name}</p>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name </label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Enter Your password </label>
        <input type="text" name="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
