import React from "react";
import './GreetingStyle.scss'
function GreetingsBlock() {
  return (
    <div className="greeting">
      <h2 className="title">Welcome Back!</h2>
      <p className="hint">Sign in to continue</p>
    </div>
  );
}

export default GreetingsBlock;
