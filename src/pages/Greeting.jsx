import React from "react";
import NewComponent from "./NewComponent";
import styles from "../my-style.module.css";

function Greeting() {
  let greetmsg = "Good Morning ";

  let myStyle = {
    color: "blue",
    padding: "10px",
    fontFamily: "-apple-system",
  };

  return (
    <div>
      <h1
        style={{
          color: "red",
          backgroundColor: "gray",
          fontFamily: "-apple-system",
        }}
      >
        Greeting Page
      </h1>
      <p className={styles.bigblue}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        eligendi quod totam tempora perferendis voluptatibus quia maxime,
        voluptatum, in nisi ea exercitationem? Quis temporibus repellat vel
        recusandae, sit magni doloribus?
      </p>
      <NewComponent message={greetmsg} />
    </div>
  );
}

export default Greeting;
