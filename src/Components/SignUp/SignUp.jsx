import React from "react";
import AuthBanner from "../AuthBanner/AuthBanner";
import AuthSection from "../AuthBanner/AuthSection";
import "./SignUpStyle.scss";
import { AUTH_TYPE } from "../../Config";
import { useNavigate } from "react-router-dom";
import { routesList } from "../../Config/routers";
function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="auth-wraapper">
      <AuthBanner
        desc={"Already have an account?"}
        btnText={"Login"}
        handleAuthAction={() => navigate(routesList?.login?.pathname)}
      />
      <AuthSection
        type={AUTH_TYPE?.SIGNUP}
        greetingTitle={"Create an account"}
        greetingHint={"Sign up to continue "}
      />
    </div>
  );
}

export default SignUp;
