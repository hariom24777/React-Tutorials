import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <>
      <div className="useMemo">
        <h4>useMemo Hook</h4>
        <div className="">
          Count: <span>{count}</span>
        </div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <br />

        <input
          type="number"
          placeholder="Enter Number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="">
          Double Value: <span>{doubleValue}</span>
        </div>
      </div>
    </>
  );
};

export default UseMemoHook;
