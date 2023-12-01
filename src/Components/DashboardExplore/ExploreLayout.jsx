import React from "react";
import "./ExploreLayoutStyle.scss";
import ProfileViewList from "./ProfileViewList";
import PremiumCard from "./PremiumCard/PremiumCard";
import FollowCard from "./FollowCard/FollowCard";
function ExploreLayout() {
  return <div className="exploreLayoutStyle">
    <ProfileViewList/>
    <PremiumCard/>
    <FollowCard/>
  </div>;
}

export default ExploreLayout;
