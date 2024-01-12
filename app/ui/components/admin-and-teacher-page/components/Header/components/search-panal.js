import React from "react";
import { Input, Space } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchComponent = () => (
  <Space direction="vertical">
    <Search
      placeholder="Пошук"
      allowClear
      enterButton="Шукати"
      size="large"
      onSearch={onSearch}
    />
  </Space>
);
export default SearchComponent;
