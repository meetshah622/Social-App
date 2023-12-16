import React from "react";
import "./AuthSectionStyle.scss";
import Logo from "../Logo/Logo";
import GreetingsBlock from "./GreetingsBlock";
import AuthForm from "./AuthForm";
function AuthSection({ type, greetingTitle, greetingHint }) {
  return (
    <div className="auth-section-wrapper">
      <Logo />
      <GreetingsBlock type={type} title={greetingTitle} hint={greetingHint} />
      <AuthForm type={type} />
    </div>
  );
}

export default AuthSection;
