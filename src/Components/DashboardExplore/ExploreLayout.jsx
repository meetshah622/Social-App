/* eslint-disable react/prop-types */
import React from "react";
import "./ExploreLayoutStyle.scss";
import ProfileViewList from "./ProfileViewList";
import PremiumCard from "./PremiumCard/PremiumCard";
import FollowCard from "./FollowCard/FollowCard";
import FriendsCard from "./FriendsCard/FriendsCard";
function ExploreLayout({
  isProfileView,
  isPremiumCard,
  isFollowCard,
  isFriendCard,
  followListData,
}) {
  return (
    <div className="exploreLayoutStyle">
      {isProfileView && <ProfileViewList />}
      {isPremiumCard && <PremiumCard />}
      {isFollowCard && <FollowCard followListData={followListData} />}
      {isFriendCard && <FriendsCard />}
    </div>
  );
}

export default ExploreLayout;
