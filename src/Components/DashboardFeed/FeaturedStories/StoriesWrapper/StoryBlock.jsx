import { Avatar } from "antd";
import React from "react";
import "./StoryBlockStyle.scss";
function StoryBlock({ imgSrc }) {
  return (
    <div className="singleStoryBg">
      <Avatar className="item-avatar" src={imgSrc} />
    </div>
  );
}

export default StoryBlock;
