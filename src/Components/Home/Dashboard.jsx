import React from "react";
import "./DashboardStyle.scss";
import SideBar from "../SideBar/SideBar";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
function Dashboard() {
  return (
    <div className="dashboardWrapper">
        <DashboardLayout />
    </div>
  );
}

export default Dashboard;
