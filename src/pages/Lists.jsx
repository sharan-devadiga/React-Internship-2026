import React from "react";

function Lists() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <div>
      <h1>Who lives in my garage?</h1>

      <ul>
        {cars.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
