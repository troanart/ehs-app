'use client'

import React from "react";
import { Breadcrumb } from "antd";
const BreadcrumbComponent = () => (
  <Breadcrumb
    items={[
      {
        title: "Home",
      },
      {
        title: "Groups",
      },
    ]}
  />
);
export default BreadcrumbComponent;
