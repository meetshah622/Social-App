import React from "react";
import AuthBanner from "../AuthBanner/AuthBanner";
import AuthSection from "../AuthBanner/AuthSection";
import './CreateAccountStyle.scss'
function CreateAccount() {
  return (
    <div className="auth-wraapper">
        <AuthBanner />
        <AuthSection />
    </div>
  );
}

export default CreateAccount;
