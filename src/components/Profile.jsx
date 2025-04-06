import React from "react";
import {
  DownOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    key: "1",
    label: "My Profile",
  },
  {
    type: "divider",
  },

  {
    key: "2",
    label: "Settings",
    icon: <SettingOutlined />,
  },
  {
    key: "3",
    label: "Logout",
    icon: <LogoutOutlined />,
  },
];
const Profile = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <UserOutlined
          style={{
            fontSize: "24px",
            marginRight: "8px",
            backgroundColor: "#D3D3D3",
            color: "white",
            padding: "8px",
            borderRadius: "25%",
          }}
        />
      </Space>
    </a>
  </Dropdown>
);
export default Profile;
