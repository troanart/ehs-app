"use client";
import React from "react";
import { Layout, Menu } from "antd";
import { Divider } from "antd";
import BasicList from "./top-list";
import {
  SettingOutlined,
  BarChartOutlined,
  BookOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Social from "./social";

const { Sider } = Layout;

const itemsLabel = [
  "Групи",
  "Студенти",
  "Викладачі",
  "Управління",
  "Статистика",
];
const items = [
  TeamOutlined,
  UserOutlined,
  BookOutlined,
  SettingOutlined,
  BarChartOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon, { className: "scale-125" }),
  label: `${itemsLabel[index]}`,
}));

export default function SiderComponents() {
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
      <div className="w-[150px] mx-auto">
        <Divider className="bg-gray-600 " />
      </div>
      <div className="p-2">
        <BasicList />
      </div>
      <div className="w-[150px] mx-auto">
        <Divider className="bg-gray-600 " />
      </div>
      {/* <Social /> */}
    </Sider>
  );
}
