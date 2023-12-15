import React from "react";
import LogoutIcon from "../../Icons/LogoutIcon";
import './LogoutBtnStyle.scss'
import { routesList } from "../../Config/routers";
function LogoutBtn() {
  return <a className="logoutIconStyle" href={routesList?.login?.pathname}><LogoutIcon/></a>;
}

export default LogoutBtn;
