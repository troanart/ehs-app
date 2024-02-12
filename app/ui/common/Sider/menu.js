'use client'
import React from "react";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import {
    BarChartOutlined,
    BookOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
    CalendarOutlined,
  } from "@ant-design/icons";

const menuItems = [
    { title: "Головна", icon: <HomeOutlined />, path: "/admin" },
    { title: "Групи", icon: <TeamOutlined />, path: "/admin/groups" },
    { title: "Студенти", icon: <UserOutlined />, path: "/admin/students" },
    { title: "Викладачі", icon: <BookOutlined />, path: "/admin/teachers" },
    { title: "Календар", icon: <CalendarOutlined />, path: "/admin/calendar" },
    { title: "Статистика", icon: <BarChartOutlined />, path: "/admin/stats" },
];

export default function MenuComponent() {
    const router = useRouter();
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
             {menuItems.map((item) => (
          <Menu.Item key={item.path} icon={item.icon} items={[]}>
            <a
              onClick={() => router.push(item.path)}
              style={{ cursor: "pointer" }}>
              {item.title}
            </a>
          </Menu.Item>
        ))}
      </Menu>
    )
}