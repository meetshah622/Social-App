import React from "react";
import FeedSearchBar from "./FeedSearchBar/FeedSearchBar";
import "./DashboardFeedStyle.scss";
import FeaturedStories from "./FeaturedStories/StoriesWrapper/FeaturedStories";
import WritePost from "./WritePost/WritePost";
import OtherUserPost from "./OtherUserPost/OtherUserPost";
function DashboardFeed() {
  return (
    <div className="dashboardFeedWrapper">
      <FeedSearchBar placeholder={"Search in social…"} />
      <FeaturedStories />
      <WritePost />
      <OtherUserPost />
    </div>
  );
}

export default DashboardFeed;
