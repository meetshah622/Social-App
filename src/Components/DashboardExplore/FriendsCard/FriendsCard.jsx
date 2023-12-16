import React, { useEffect, useState } from "react";
import { Button } from "antd";
import FriendsAvatar1 from "../../../assets/Images/friends-Avatar-1.png";
import FriendsAvatar2 from "../../../assets/Images/friends-Avatar-1.png";
import FriendsAvatar3 from "../../../assets/Images/friends-Avatar-3.png";

import RightArrowIcon from "../../../Icons/RightArrowIcon";
import UsersList from "../UsersList/UsersList";
import "./FriendsCardStyle.scss";
import { routesList } from "../../../Config/routers";
import { useNavigate } from "react-router-dom";
const listData = [
  {
    title: "MadeInAmerica",
    iconSrc: FriendsAvatar1,
  },
  {
    title: "MadeInAmerica",
    iconSrc: FriendsAvatar2,
  },
  {
    title: "MadeInAmerica",
    iconSrc: FriendsAvatar3,
  },
];
export default function FriendsCard() {
  const navigate = useNavigate();

  return (
    <div className="friendsCardWrapper">
      <div className="title">Friends</div>
      <UsersList listData={listData} alreadyAddedBtn />
      <div className="seemoreWrapper">
        <Button
          className="seemoreBtn"
          onClick={() => navigate(routesList?.friendsList?.pathname)}
        >
          SEE MORE
        </Button>
        <RightArrowIcon />
      </div>
    </div>
  );
}
