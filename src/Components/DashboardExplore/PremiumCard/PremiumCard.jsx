import React from "react";
import "./PremiumCardStyle.scss";
import { Button } from "antd";
import ExploreBlackOvalIcon from "../../../Icons/ExploreBlackOvalIcon";
import ExploreGreenOvalIcon from "../../../Icons/ExploreGreenOvalIcon";
import ExploreRedOvalIcon from "../../../Icons/ExploreRedOvalIcon";
import RightArrowIcon from "../../../Icons/RightArrowIcon";
function PremiumCard() {
  return (
    <div className="premiumCardStyleWrapper">
      <ExploreBlackOvalIcon className="blackOval" />
      <ExploreGreenOvalIcon className={"greenOval"} />
      <ExploreRedOvalIcon className={"redOval"} />
      <div className="cardContent">
        <div className="title">Go Premium!</div>
        <div className="description">
          Try premium membership and enjoy a full experience of our community.
        </div>
        <div className="seemoreBtnWrapper">
          <Button className="moreInfoBtn">
            See more <RightArrowIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PremiumCard;
