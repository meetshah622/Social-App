import React from "react";
import CustomAvatar from "./CustomAvatar";
import "./ProfileViewListStyle.scss";
import exploreAvatar from "../../assets/Images/explore-Avatar.png";
function ProfileViewList() {
  return (
    <div className="profileListWrapper">
      <div className="notificationWrapper">
        <div className="notificationCount">1</div>
      </div>
      <CustomAvatar iconSrc={exploreAvatar} />
    </div>
  );
}

export default ProfileViewList;
