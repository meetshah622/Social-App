import React from "react";
import "./FeaturedStoriesStyle.scss";
import { Button } from "antd";
import RightArrowIcon from "../../../../Icons/RightArrowIcon";
import StoriesWrapper from "./StoriesWrapper";
export default function FeaturedStories() {
  return (
    <div className="featuredStoriesStyle">
      <div className="titleWrapper">
        <span className="title">Featured Stories</span>
        <div className="seemoreBtnWrapper">
          <Button className="moreInfoBtn">
            See more <RightArrowIcon />
          </Button>
        </div>
      </div>
      <StoriesWrapper />
    </div>
  );
}
