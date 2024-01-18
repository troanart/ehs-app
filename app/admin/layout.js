import React from "react";
import Head from "next/head";
import { Layout } from "antd";
import HeaderComponents from "../ui/components/admin-and-teacher-page/components/Header/components/Header";
import SiderComponents from "../ui/components/admin-and-teacher-page/components/Sider/Sider";
import Main from "../ui/components/admin-and-teacher-page/components/Main/Main";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Layout hasSider>
          <SiderComponents />
          <Layout
            style={{
              marginLeft: 200,
            }}>
            <HeaderComponents />
            <Main>{children}</Main>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
