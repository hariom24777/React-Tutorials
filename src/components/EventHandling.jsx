import React, { useEffect, useState } from "react";

const EventHandling = () => {
  const [count, setCount] = useState(0);
const [total, setTotal] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  function handleTotal(){
    setTotal(total+2);
  }

  // *---- USEEFFECT ----*

  // 1. side-effect logic function
  // 2. clean-up function
  // 3. comma separated dependancy array

  // --> Variation 1 : Runs on every render
  //   useEffect(()=>{
  //   console.log('Run on every render.')
  // })

  // --> Variation 2 : Runs only on first render
  // useEffect(() => {
  //   console.log('Run only on first render.')
  // }, [])

  // --> Variation 3 : Run on updation of a dependancy
  // useEffect(() => {
  //   console.log("Run every time when dependancy updated.");
  // }, [count]);

  // --> Variation 4: Multiple dependancies
  // useEffect(() => {
  //   console.log('Run everytime when click/even-click updated.')
  // }, [count, total]);

  //  --> Variation 5: With Cleanup Function
  useEffect(() => {
    console.log('UseEffect Triggered');

    return () => {
      console.log("It is a cleanup fuction,triggers when previous count is unmounted from UI")
    }
  }, [count])

  return (
    <div className="eventHandling">
      <h4>Event Handling</h4>
      <button onClick={handleCount}>Click Me</button>
      <p>
        Number of Clicks: <span>{count}</span>
      </p>
      <button onClick={handleTotal}>Click Me</button>
      <p>
        Number of Clicks: <span>{total}</span>
      </p>
    </div>
  );
};

export default EventHandling;
