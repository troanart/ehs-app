import React from "react";
import { Dropdown } from "antd";
import { Avatar, Space } from "antd";

const items = [
  {
    key: "1",
    label: <button>Змінити користувача</button>,
  },
  {
    key: "2",
    label: <button>Вихід</button>,
  },
];
const AvatarComponent = () => (
  <>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow>
      <Space>
        <Avatar>Admin</Avatar>
      </Space>
    </Dropdown>
  </>
);
export default AvatarComponent;
