import React from "react";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

function Conditional() {
  let isTrue = false;

  //   if (isTrue) {
  //     return <MadeGoal />;
  //   } else {
  //     return <MissedGoal />;
  //   }

  return (
    // <div>
    //   {isTrue && <MadeGoal />}
    //   {!isTrue && <MissedGoal />}
    // </div>
    <div>{isTrue ? <MadeGoal /> : <MissedGoal />}</div>
  );
}

export default Conditional;
