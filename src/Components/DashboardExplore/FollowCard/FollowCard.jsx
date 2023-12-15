import React, { useEffect, useState } from "react";
import "./FollowCardStyle.scss";
import { Avatar, Button, List, Skeleton } from "antd";
import FollowAvatar1 from "../../../assets/Images/Follow-Avatar-1.png";
import FollowAvatar2 from "../../../assets/Images/Follow-Avatar-2.png";
import FollowAvatar3 from "../../../assets/Images/Follow-Avatar-3.png";
import AddUserIcon from "../../../Icons/AddUserIcon";
import RightArrowIcon from "../../../Icons/RightArrowIcon";
import UsersList from "../UsersList/UsersList";

const listData = [
  {
    title: "Cammy Hedling",
    desc: "Los Angeles, CA",
    iconSrc: FollowAvatar1,
  },
  {
    title: "Cammy Hedling",
    desc: "Los Angeles, CA",
    iconSrc: FollowAvatar2,
  },
  {
    title: "Cammy Hedling",
    desc: "Los Angeles, CA",
    iconSrc: FollowAvatar3,
  },
];
export default function FollowCard({ followListData = listData }) {
  return (
    <div className="followCardWrapper">
      <div className="title">Who to Follow</div>
      <UsersList listData={followListData} addUserBtn />
      <div className="seemoreWrapper">
        <Button
          className="seemoreBtn"
        >
          SEE MORE
        </Button>
        <RightArrowIcon />
      </div>
    </div>
  );
}
