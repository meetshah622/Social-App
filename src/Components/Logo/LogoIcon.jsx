import React from "react";
import siteLogoIcon from "../../assets/Images/Logo-icon.png";
import { useNavigate } from "react-router-dom";
import { routesList } from "../../Config/routers";
function LogoIcon() {
  const navigate = useNavigate();
  return (
    <div className="LogoIcon" onClick={()=>navigate(routesList?.home?.pathname)}>
      <img src={siteLogoIcon} alt="LogoIcon" />
    </div>
  );
}

export default LogoIcon;
