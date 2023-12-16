import React from "react";
import SideBar from "../SideBar/SideBar";
import ExploreLayout from "../DashboardExplore/ExploreLayout";
import "./FriendsListWrapperStyle.scss";
import { Row, Col } from "antd";
import FriendsAvatar1 from "../../assets/Images/friends-Avatar-1.png";
import FriendsAvatar2 from "../../assets/Images/friends-Avatar-1.png";
import FriendsAvatar3 from "../../assets/Images/friends-Avatar-3.png";
import FriendList from "./FriendList/FriendList";
export default function FriendsListWrapper() {
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
  return (
    <div className="friendsListWrapper">
      <Row>
        <SideBar />
        <Col span={15}>
          <FriendList />
        </Col>
        <Col span={6}>
          <ExploreLayout isFollowCard isProfileView followListData={listData} />
        </Col>
      </Row>
    </div>
  );
}
