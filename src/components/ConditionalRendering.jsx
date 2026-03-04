import React, { useState } from "react";

const ConditionalRendering = () => {
  const [isStart, setStart] = useState();

  //   if (isStart) {
  //     return <button>Stop</button>;
  //   } else {
  //     return <button>Start</button>;
  //   }


  return (
    <div className="conditionalRendering">
      {" "}
      <h4>Conditional Rendering</h4>
      {isStart ? <button>Stop</button> : <button>Start</button>}
    </div>
  );

// ----- Early rendering and Logical Operator -----

  // if (!isStart) {

  //   return <button>Start</button>;
  // }

  // return (
  //   <>
  //     <div className="conditionalContent">
  //       {isStart && <button>Stop</button>}
  //     </div>
  //   </>
  // );
};
export default ConditionalRendering;
