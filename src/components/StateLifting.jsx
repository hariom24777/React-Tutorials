import React from "react";

const StateLifting = (props) => {
  return (
    <>
      <div className="stateLifting">
        <h4>State Lifting</h4>
        <input
          type="text"
          placeholder="Please, type some text here..."
          onChange={(e) => props.setName(e.target.value)}
        />
        <p>
          Displayed inside the child (same component): <span>{props.name}</span>
        </p>
      </div>
    </>
  );
};

export default StateLifting;
