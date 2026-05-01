import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  // const [count, setCount] = useState(0);

  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleIncreament() {
  //   val.current = val.current + 1;
  //   console.log("Val: ", val.current);
  //   setCount(count + 1);
  // }

  // useEffect(() => {
  //   console.log("I'm re-rendered");
  // });

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "red";
  // }

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <>
      <div className="useRefHook">
        <h4>useRef Hook</h4>
        {/* <span>{count}</span>
        <button ref={btnRef} onClick={handleIncrement}>
          Increament
        </button>

        <button onClick={changeColor}>Change Increament Color</button> */}

        <h5
          style={{
            fontSize: "1.15rem",
            fontWeight: "500",
          }}
        >
          Stopwatch
        </h5>
        <span>{time} seconds</span>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
};

export default UseRefHook;
