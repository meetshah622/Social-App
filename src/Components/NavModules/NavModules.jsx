import React from "react";
import "./NavModulesStyle.scss";
import NavModuleIcon from "./NavModuleIcon";
import HomeIcon from "../../Icons/HomeIcon";
import CalenderIcon from "../../Icons/CalenderIcon";
import EmailIcon from "../../Icons/EmailIcon";
import ProfileIcon from "../../Icons/ProfileIcon";
import SettingIcon from "../../Icons/SettingIcon";
function NavModules() {
  return (
    <div className="navModulesWrapper">
      <NavModuleIcon icon={<HomeIcon />} />
      <NavModuleIcon icon={<CalenderIcon />} />
      <NavModuleIcon icon={<EmailIcon />} />
      <NavModuleIcon icon={<ProfileIcon />} />
      <NavModuleIcon icon={<SettingIcon />} />
    </div>
  );
}

export default NavModules;
