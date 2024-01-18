"use client";
import React from "react";
import { Layout, theme } from "antd";
import ColorToggleButton from "../toggle-button.js/filter-btn";
import CollapsibleTable from "../table/table-groups";
const { Content } = Layout;

export default function Main() {
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
        }}>
        <div className="mb-5">{/* <ColorToggleButton /> */}</div>

        {/* <CollapsibleTable /> */}
      </div>
    </Content>
  );
}
