import React, { useCallback, useEffect, useRef, useState } from "react";

const UseCallbackChild = React.memo((props) => {
  //   console.log("Child component re-rendered.");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const previousFunction = useRef(null);

  const expensiveCalculation = useCallback(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction.current === expensiveCalculation) {
        console.log("Function not re-created");
      } else {
        console.log("Function re-created");
      }
    } else {
      previousFunction.current = expensiveCalculation;
    }
  }, [expensiveCalculation]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <button onClick={props.handleClick}>{props.buttonName}</button> */}

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here..."
        />

        <p>
          Expensive Calculation Result: <span>{expensiveCalculation()}</span>
        </p>

        <div>
          Count: <span>{count}</span>
        </div>
        <button onClick={() => setCount(count + 1)}>Increament Count</button>
      </div>
    </>
  );
});

export default UseCallbackChild;

// React.memo(....)   -->>   re-render only if props changes. No un-neccesary re-renders.

// If a function is sent as a prop then 'React.memo' will not stop re-rendering.
