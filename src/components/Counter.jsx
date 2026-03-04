import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counterContainer">
        <p className="counterPara">
          You have clicked <span>{count}</span> times
        </p>
        <div className="counterBtnContainer">
          <button
            className="counterButton"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Click Me
          </button>
          <button
            className="counterButton"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
