import React from "react";
import "./DashboardExploreStyle.scss";
import LeftIndicator from "./LeftIndicator";
import ExploreLayout from "./ExploreLayout";
function DashboardExplore() {
  return (
    <div className="dashboardExploreStyle">
      {/* <LeftIndicator /> */}
      <ExploreLayout isProfileView isFollowCard isFriendCard isPremiumCard/>
    </div>
  );
}

export default DashboardExplore;
