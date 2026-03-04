import React, { useState } from "react";
import Counter from "../components/Counter";
import StateLifting from "../components/StateLifting";
import ConditionalRendering from "../components/ConditionalRendering";
import EventHandling from "../components/EventHandling";
import Countdown from "../components/Countdown";

const Practice = () => {
  const [name, setName] = useState("");
  return (
    <>
      <Counter />

      <div className="stateLiftingContainer">
        <StateLifting name={name} setName={setName}>
          {" "}
        </StateLifting>
        <p>
          Displayed inside the parent component from the child component using
          state lifting concept: <span>{name}</span>
        </p>
      </div>

      <div className="conditionalRenderingContainer">
        <ConditionalRendering />
      </div>

      <div className="eventHandlingContainer">
        <EventHandling />
      </div>

      <div className="useEffectContainer">
        <Countdown />
      </div>
    </>
  );
};

export default Practice;
