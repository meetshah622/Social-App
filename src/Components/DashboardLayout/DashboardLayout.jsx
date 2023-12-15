import React from "react";
import DashboardFeed from "../DashboardFeed/DashboardFeed";
import DashboardExplore from "../DashboardExplore/DashboardExplore";
import "./DashboardLayoutStyle.scss";
import { Col, Row } from "antd";
import SideBar from "../SideBar/SideBar";
function DashboardLayout() {
  return (
    <div className="dashboardLayoutWrapper">
      <Row>
        <SideBar />
        <Col span={15}>
          <DashboardFeed />
        </Col>
        <Col span={6}>
          <DashboardExplore />
        </Col>
      </Row>
    </div>
  );
}

export default DashboardLayout;
