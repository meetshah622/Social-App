import { Input, Space, Tooltip } from "antd";
import Icon from "@ant-design/icons";
import React from "react";
import "./FeedSearchBarStyle.scss";
import SearchIcon from "../../../Icons/SearchIcon";
export default function FeedSearchBar({
  placeholder
}) {
  return (
    <Space direction="vertical" className="feedSearchBarStyle">
      <Input
        className="search-input"
        placeholder={placeholder}
        prefix={<SearchIcon />}
        suffix={<Tooltip title="Filter">Filter</Tooltip>}
      />
    </Space>
  );
}
