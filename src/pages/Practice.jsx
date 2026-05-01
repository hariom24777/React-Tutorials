import React, { createContext, useState } from "react";
import Counter from "../components/Counter";
import StateLifting from "../components/StateLifting";
import ConditionalRendering from "../components/ConditionalRendering";
import EventHandling from "../components/EventHandling";
import Countdown from "../components/Countdown";
import ChildForUseContext from "../components/ChildForUseContext";
import UseRefHook from "../components/UseRefHook";
import UseMemoHook from "../components/UseMemoHook";
import UseCallbackHook from "../components/UseCallbackHook";

const UserContext = createContext();

const Practice = () => {
  const [name, setName] = useState("");

  const [user, setUser] = useState({Username:'Harry'});

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

      <UserContext.Provider value={user}>
        <div className="useContextContainer">
        <ChildForUseContext />
      </div>
      </UserContext.Provider>

      <div className="useRefContainer">
        <UseRefHook />
      </div>

      <div className="useMemoContainer">
        <UseMemoHook />
      </div>

      <div className="useCallbackContainer">
        <UseCallbackHook />
      </div>
    </>
  );
};

export default Practice;
export {UserContext};
