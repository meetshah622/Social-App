import React from "react";
import "./AuthBannerStyle.scss";
import { Button } from "antd";
function AuthBanner({ desc,btnText,handleAuthAction }) {
  return (
    <div className="auth-banner-wrapper">
      <h4 className="auth-banner-title">Hello!</h4>
      <p className="auth-banner-desc">
        {desc}
      </p>

      <Button className="auth-banner-btn" type="primary"  onClick={handleAuthAction}>
       {btnText}
      </Button>
    </div>
  );
}

export default AuthBanner;
