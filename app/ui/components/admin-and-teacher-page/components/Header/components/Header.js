"use client";

import React from "react";
import { Layout, theme } from "antd";
import AccountMenu from "./notification-modal";
import BreadcrumbComponent from "./breadcramp";
import AvatarComponent from "./avatar";
import { Divider } from "antd";
const { Header } = Layout;

export default function HeaderComponents() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}>
      <div className="mx-4 flex items-center ">
        <div className="mr-auto ">
          <BreadcrumbComponent />
        </div>
        <AvatarComponent />
        <div>
          <Divider type="vertical" className="bg-gray-300 h-[25px]" />
        </div>
        <AccountMenu />
      </div>
    </Header>
  );
}
