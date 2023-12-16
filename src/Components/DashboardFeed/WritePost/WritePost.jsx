import { Avatar, Button, Col, Row, Space } from "antd";
import React from "react";
import "./WritePostStyle.scss";
import iconSrc from "../../../assets/Images/Follow-Avatar-1.png";
import { Input } from "antd";
import MenuIcon from "../../../Icons/Menu-Icon";
import camImg from "../../../assets/Images/Camera.png";
import videoImg from "../../../assets/Images/Video-Camera.png";
import plusImg from "../../../assets/Images/Plus.png";
const { TextArea } = Input;
export default function WritePost() {
  const ActionItemAvatar = ({src})=> <Col span={8}>
  <Button className="action-item-avatar">
    <Avatar src={src} />
  </Button>
</Col>
  return (
    <div className="writePostWrapper">
      <Space>
        <Col className="post-content-action">
          <Row className="postContent">
            <Col span={1}>
              <Avatar className="list-item-avatar" src={iconSrc} />
            </Col>
            <Col span={22}>
              <TextArea
                rows={4}
                placeholder="What are you thinking? "
                cols={500}
              />
            </Col>
            <Col span={1}>
              <MenuIcon />
            </Col>
          </Row>
          <Row className="postActionWrapper">
            <Col span={4}>
              <Row>
               <ActionItemAvatar src={camImg}/>
               <ActionItemAvatar src={videoImg}/>
               <ActionItemAvatar src={plusImg}/>
              </Row>
            </Col>
            <Col span={20}>
              <Button className="sharePostBtn">Share</Button>
            </Col>
          </Row>
        </Col>
      </Space>
    </div>
  );
}
