"use client";

import React from "react";
import { Layout, Menu } from "antd";
import { Divider } from "antd";
import BasicList from "./top-list";
import {
  BarChartOutlined,
  BookOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import Social from "./social";
import Logout from "./logout-btn";

const { Sider } = Layout;

const itemsLabel = [
  "Головна",
  "Групи",
  "Студенти",
  "Викладачі",
  "Календар",
  "Статистика",
];
const items = [
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  BookOutlined,
  CalendarOutlined,
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
      <div className="demo-logo-vertical text-center mt-2" >
        <h1 className="text-red-500 font-['Raleway'] text-6xl text-center">ASAT</h1>
      </div>
      <div className="w-[150px] mx-auto">
        <Divider className="bg-gray-600 " />
      </div>
      
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
      <div className="w-[150px] mx-auto">
        <Divider className="bg-gray-600 " />
      </div>
      {/* <div className="p-2">
        <BasicList />
      </div>
      <div className="w-[150px] mx-auto">
        <Divider className="bg-gray-600 " />
      </div>
      <div className="flex justify-center content-center"><Social /></div>
      <div className="w-[150px] mx-auto">
        <Divider className="bg-gray-600 " />
      </div> */}
      {/* <div className="flex justify-center content-center ">
        <Logout/>
      </div> */}
      
      
    </Sider>
  );
}
