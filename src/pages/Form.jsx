import React from "react";

function Form() {
  let handleChange = (e) => {
    console.log(e.target.value);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name </label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Enter Your password </label>
        <input type="text" name="password" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
