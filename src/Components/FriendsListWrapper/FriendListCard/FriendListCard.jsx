/* eslint-disable react/prop-types */
import { Button, Card, Row } from "antd";
import React from "react";
import "./FriendListCardStyle.scss";
import CheckIcon from "../../../Icons/CheckIcon";
function FriendListCard({ imgSrc, titleName, userId }) {
  return (
    <Card className="friendListCardStyle">
      <Row className="friend-avatar">
        <img src={imgSrc} />
      </Row>
      <Row className="title">{titleName}</Row>
      <Row className="uid">{userId}</Row>
      <Row className="friendBtn">
        <Button>
          <CheckIcon />
          Friends
        </Button>
      </Row>
    </Card>
  );
}

export default FriendListCard;
