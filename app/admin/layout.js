import React from "react";
import Head from "next/head";
import { Layout } from "antd";
import HeaderComponents from "../ui/common/Header/components/Header";
import SiderComponents from "../ui/common/Sider/Sider";
import Main from "../ui/common/Main/Main";
import FooterComponent from "../ui/common/Footer/Footer";

export default function AdminLayout({ children }) {
  return (
    <div>
      <SiderComponents />
      <Layout
        style={{
          marginLeft: 200,
        }}>
        <HeaderComponents />
        <Main>{children}</Main>
        <FooterComponent />
      </Layout>
    </div>
  );
}
