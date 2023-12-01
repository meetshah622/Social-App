import React from "react";
import "./DashboardExploreStyle.scss";
import LeftIndicator from "./LeftIndicator";
import ExploreLayout from "./ExploreLayout";
function DashboardExplore() {
  return (
    <div className="dashboardExploreStyle">
      <LeftIndicator />
      <ExploreLayout/>
    </div>
  );
}

export default DashboardExplore;
