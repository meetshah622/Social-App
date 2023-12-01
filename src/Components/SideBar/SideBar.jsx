import React from "react";
import "./SidebarStyle.scss";
import LogoIcon from "../Logo/LogoIcon";
import NavModules from "../NavModules/NavModules";
import LogoutBtn from "../NavModules/LogoutBtn";
function SideBar() {
  return (
    <div className="sidebarWrapper">
      <div className="logoIcon">
        <LogoIcon />
      </div>
      <NavModules />
      <LogoutBtn/>
    </div>
  );
}

export default SideBar;
