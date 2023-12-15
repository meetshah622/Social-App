import React from "react";
import FeedSearchBar from "../../DashboardFeed/FeedSearchBar/FeedSearchBar";
import "./FriendListStyle.scss";
import { Button, Card, Col, Row } from "antd";
import FriendListCard from "../FriendListCard/FriendListCard";
import FriendsAvatar1 from "../../../assets/Images/friends-Avatar-1.png";
import FriendsAvatar2 from "../../../assets/Images/friends-Avatar-2.png";
import FriendsAvatar3 from "../../../assets/Images/friends-Avatar-3.png";
import FilterIcon from "../../../Icons/FilterIcon";
function FriendList() {
  return (
    <div className="friendListActionWrapper">
      <FeedSearchBar placeholder={"Search in friends..."} />
      <div className="titleWrapper">
        <span className="title">My Friends</span>
        <div className="seemoreBtnWrapper">
          <Button className="moreInfoBtn">
            Filter <FilterIcon />
          </Button>
        </div>
      </div>
      <Row>
        <Col span={8} className="friendCardListWrapper">
          <FriendListCard
            imgSrc={FriendsAvatar1}
            titleName={"Billy Green"}
            userId={"@BillyGreen"}
          />
        </Col>

        <Col span={8} className="friendCardListWrapper">
          <FriendListCard
            imgSrc={FriendsAvatar1}
            titleName={"Billy Green"}
            userId={"@BillyGreen"}
          />
        </Col>
        <Col span={8} className="friendCardListWrapper">
          <FriendListCard
            imgSrc={FriendsAvatar1}
            titleName={"Billy Green"}
            userId={"@BillyGreen"}
          />
        </Col>
        <Col span={8} className="friendCardListWrapper">
          <FriendListCard
            imgSrc={FriendsAvatar1}
            titleName={"Billy Green"}
            userId={"@BillyGreen"}
          />
        </Col>
        <Col span={8} className="friendCardListWrapper">
          <FriendListCard
            imgSrc={FriendsAvatar1}
            titleName={"Billy Green"}
            userId={"@BillyGreen"}
          />
        </Col>
        <Col span={8} className="friendCardListWrapper">
          <FriendListCard
            imgSrc={FriendsAvatar1}
            titleName={"Billy Green"}
            userId={"@BillyGreen"}
          />
        </Col>

        <Col span={8} className="friendCardListWrapper">
          <FriendListCard
            imgSrc={FriendsAvatar1}
            titleName={"Billy Green"}
            userId={"@BillyGreen"}
          />
        </Col>
      </Row>
    </div>
  );
}

export default FriendList;
