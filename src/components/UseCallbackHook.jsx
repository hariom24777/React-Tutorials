import React, { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div className="useCallback">
        <h4>useCallback</h4>

        {/* <div className="">
          Count: <span>{count}</span>
        </div>
        <button onClick={handleClick}>Increment</button>
        <br />
        <div className="">
          <UseCallbackChild buttonName="Click Me" handleClick={handleClick} />
        </div> */}


        <UseCallbackChild />
      </div>
    </>
  );
};

export default UseCallbackHook;
