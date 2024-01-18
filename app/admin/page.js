// "use client";

// import React from "react";
// import { Layout, Menu, theme } from "antd";

// import {
//   SettingOutlined,
//   BarChartOutlined,
//   BookOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Divider } from "antd";
// import AvatarComponent from "../ui/components/admin-and-teacher-page/components/Header/components/avatar";
// import CollapsibleTable from "../ui/components/admin-and-teacher-page/components/table/table-groups";
// import ColorToggleButton from "../ui/components/admin-and-teacher-page/components/toggle-button.js/filter-btn";
// import BasicList from "../ui/components/admin-and-teacher-page/components/Sider/top-list";
// import BreadcrumbComponent from "../ui/components/admin-and-teacher-page/components/Header/components/breadcramp";
// import AccountMenu from "../ui/components/admin-and-teacher-page/components/Header/components/notification-modal";
// const { Header, Content, Footer, Sider } = Layout;

// const itemsLabel = [
//   "Групи",
//   "Студенти",
//   "Викладачі",
//   "Управління",
//   "Статистика",
// ];
// const items = [
//   TeamOutlined,
//   UserOutlined,
//   BookOutlined,
//   SettingOutlined,
//   BarChartOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon, { className: "scale-125" }),
//   label: `${itemsLabel[index]}`,
// }));

const Admin = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  return (
    <h1>Єто админка</h1>
    // <Layout hasSider>
    //   <Sider
    //     style={{
    //       overflow: "auto",
    //       height: "100vh",
    //       position: "fixed",
    //       left: 0,
    //       top: 0,
    //       bottom: 0,
    //     }}>
    //     <div className="demo-logo-vertical" />
    //     <Menu
    //       theme="dark"
    //       mode="inline"
    //       defaultSelectedKeys={["4"]}
    //       items={items}
    //     />
    //     <div className="w-[150px] mx-auto">
    //       <Divider className="bg-gray-600 " />
    //     </div>
    //     <div className="p-2">
    //       <BasicList />
    //     </div>
    //   </Sider>
    //   <Layout
    //     style={{
    //       marginLeft: 200,
    //     }}>
    //     <Header
    //       style={{
    //         padding: 0,
    //         background: "#f6ffed",
    //       }}>
    //       <div className="mx-4 flex">
    //         <div className="mr-auto">
    //           <BreadcrumbComponent />
    //         </div>
    //         <AvatarComponent />
    //         <div>
    //           <Divider type="vertical" className="bg-gray-300 h-[25px]" />
    //         </div>
    //         <AccountMenu />
    //       </div>
    //     </Header>
    //     <Content
    //       style={{
    //         margin: "24px 16px 0",
    //         overflow: "initial",
    //       }}>
    //       <div
    //         style={{
    //           padding: 24,
    //           textAlign: "center",
    //           background: "#f6ffed",
    //           borderRadius: "4px",
    //         }}>
    //         <div className="mb-5">
    //           <ColorToggleButton />
    //         </div>

    //         <CollapsibleTable />
    //       </div>
    //     </Content>
    //     <Footer
    //       style={{
    //         maxHeight: "45px",
    //         textAlign: "center",
    //       }}></Footer>
    //   </Layout>
    // </Layout>
  );
};
export default Admin;
