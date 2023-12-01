import React from "react";
import "./AuthSectionStyle.scss";
import Logo from "../Logo/Logo";
import GreetingsBlock from "./GreetingsBlock";
import AuthForm from "./AuthForm";
function AuthSection() {
  return (
    <div className="auth-section-wrapper">
      <Logo />
      <GreetingsBlock />
      <AuthForm/>
    </div>
  );
}

export default AuthSection;
