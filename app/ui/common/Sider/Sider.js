'use server'
import React from "react";
import { Divider } from "antd";
import MenuComponent from "./menu";

export default function SiderComponents() {
  return (
    <aside
      style={{
        background: "#001529",
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}>
      <div className="demo-logo-vertical text-center mt-2">
        <h1 className="text-red-500 font-['Raleway'] text-6xl text-center">
          ASAT
        </h1>
      </div>
      <div className="w-[150px] mx-auto">
        <Divider className="bg-gray-600 " />
      </div>
        <MenuComponent/>
      <div className="w-[150px] mx-auto">
        <Divider className="bg-gray-600 " />
      </div>
    </aside>
  );
}
