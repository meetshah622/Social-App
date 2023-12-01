import React from "react";
import './AuthBannerStyle.scss'
import {Button} from 'antd'
function AuthBanner() {
  return (
    <div className="auth-banner-wrapper">
      <h4 className="auth-banner-title">Hello!</h4>
      <p className="auth-banner-desc">Don't have an account yet?</p>

      <Button className="auth-banner-btn"  type="primary">Create an account</Button>
    </div>
  );
}

export default AuthBanner;
