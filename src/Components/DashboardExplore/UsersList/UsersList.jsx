import { Avatar, Button, List } from "antd";
import React from "react";
import AddUserIcon from "../../../Icons/AddUserIcon";
import "./UsersListStyle.scss";
import RightSignIcon from "../../../Icons/RightSignIcon";
export default function UsersList({ listData, addUserBtn=false, alreadyAddedBtn=false }) {
  return (
    <div className="userListStyle">
      <List
        className="list-items"
        itemLayout="horizontal"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item?.id ?? new Date()?.getMilliseconds()}
            className="list-item"
          >
            <List.Item.Meta
              avatar={
                <Avatar className="list-item-avatar" src={item?.iconSrc} />
              }
              title={<span className="list-item-title">{item?.title}</span>}
              description={<span className="list-item-desc">{item?.desc}</span>}
            />
            {addUserBtn && (
              <Button className="addUserIconWrapper">
                <AddUserIcon />
              </Button>
            )}
            {alreadyAddedBtn && (
              <Button className="alreadyAddedIconWrapper">
                <RightSignIcon />
              </Button>
            )}
          </List.Item>
        )}
      />
    </div>
  );
}
