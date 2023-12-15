import React from "react";
import "./OtherUserPostStyle.scss";
import { Avatar, Col, Row, Space } from "antd";
import iconSrc from "../../../assets/Images/friends-avatar-2.png";
import MenuIcon from "../../../Icons/Menu-Icon";
import postImg1 from "../../../assets/Images/post-img-1.png";
import postImg2 from "../../../assets/Images/post-img-2.png";
import postImg3 from "../../../assets/Images/post-img-3.png";
import postImg4 from "../../../assets/Images/post-img-4.png";
import postImg5 from "../../../assets/Images/post-img-5.png";

function OtherUserPost() {
  return (
    <div className="otherUsersPostWrapper">
      <Space>
        <Col className="post-content-action">
          <Row className="postContent">
            <Col span={1}>
              <Avatar className="list-item-avatar" src={iconSrc} />
            </Col>
            <Col span={22} className="userInfo">
              <Row className="username">Dustin Houston</Row>
              <Row className="timestamp">5min ago</Row>
            </Col>
            <Col span={1}>
              <MenuIcon />
            </Col>
          </Row>
          <p className="post-text">
            Whether its a driving tour, a cruise or a bus, leaf viewing is a
            great way to spend a fall vacation 😂
          </p>
          <Row className="post-graphics">
            <Col span={12} className="single-post">
              <img src={postImg1} />
            </Col>
            <Col span={12} className="multi-post">
              <Row gutter={16}>
                <Col span={12}>
                  <img src={postImg2} />
                </Col>
                <Col span={12}>
                  <img src={postImg3} />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <img src={postImg4} />
                </Col>
                <Col span={12}>
                  <img src={postImg5} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Space>
    </div>
  );
}

export default OtherUserPost;
