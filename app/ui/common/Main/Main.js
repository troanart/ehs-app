"use client";

import React from "react";
import { Layout, theme } from "antd";

const { Content } = Layout;

export default function Main({children}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: "24px 16px 0",
        overflow: "initial",
        
      }}>
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          minHeight: "85.8vh"
        }}>
          {children}
        
      </div>
    </Content>
  );
}
