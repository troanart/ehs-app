"use client";

import React from "react";
import { Layout, Menu } from "antd";
import { Divider } from "antd";
import { useRouter } from "next/navigation";
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



const menuItems = [
  { title: "Головна", icon: <HomeOutlined />, path: "/" },
  { title: "Групи", icon: <TeamOutlined />, path: "/admin/groups" },
  { title: "Студенти", icon: <UserOutlined />, path: "/admin/students" },
  { title: "Викладачі", icon: <BookOutlined />, path: "/admin/teachers" },
  { title: "Календар", icon: <CalendarOutlined />, path: "/admin/calendar" },
  { title: "Статистика", icon: <BarChartOutlined />, path: "/admin/stats" },
];


export default function SiderComponents() {
  const router = useRouter();
  return (
    <Sider
      style={{
        background: '#001529',
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} >
        {menuItems.map((item) => (
          <Menu.Item key={item.path} icon={item.icon}>
            <a
              onClick={() => router.push(item.path)}
              style={{ cursor: "pointer" }}
            >
              {item.title}
            </a>
          </Menu.Item>
        ))}
      </Menu>
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
