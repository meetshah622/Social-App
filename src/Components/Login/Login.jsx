import React from "react";
import AuthBanner from "../AuthBanner/AuthBanner";
import AuthSection from "../AuthBanner/AuthSection";
import "./LoginStyle.scss";
import { AUTH_TYPE } from "../../Config";
import { useNavigate } from "react-router-dom";
import { routesList } from "../../Config/routers";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="auth-wraapper">
      <AuthBanner
        desc={"Don't have an account yet?"}
        btnText={"Create an account"}
        handleAuthAction={() => navigate(routesList?.createAccount?.pathname)}
      />
      <AuthSection
        type={AUTH_TYPE?.LOGIN}
        greetingTitle={"Welcome Back! "}
        greetingHint={"Sign in to continue "}
      />
    </div>
  );
}

export default Login;
