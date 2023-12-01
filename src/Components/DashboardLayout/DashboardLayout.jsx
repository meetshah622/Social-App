import React from "react";
import DashboardFeed from "../DashboardFeed/DashboardFeed";
import DashboardExplore from "../DashboardExplore/DashboardExplore";
import './DashboardLayoutStyle.scss'
function DashboardLayout() {
  return (
    <div className="dashboardLayoutWrapper">
      <DashboardFeed />
      <DashboardExplore />
    </div>
  );
}

export default DashboardLayout;
