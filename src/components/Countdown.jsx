import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Count Changed: ", count);
  }, [count]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log("SetInterval Started");
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

  return (
    <div className="useEffect">
      <h4>UseEffect</h4>
      <p>
        Count: <span>{count}</span>
      </p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <p>Seconds: {seconds} <br /><i>Logic for seconds is commented</i></p>
      
    </div>
  );
};

export default Countdown;
