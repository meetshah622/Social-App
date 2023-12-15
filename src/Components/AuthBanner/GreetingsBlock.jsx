import React from "react";
import "./GreetingStyle.scss";
import { AUTH_TYPE } from "../../Config";
function GreetingsBlock({ type, title, hint }) {
  return (
    <div className="greeting">
      <h2 className="title">{title}</h2>
      <p className="hint">{hint}</p>
    </div>
  );
}

export default GreetingsBlock;
