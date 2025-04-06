import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { Button, Layout, theme } from "antd";
import Profile from "./Profile";
import { FORMAT_RGB } from "antd/es/color-picker/interface";
const { Header } = Layout;

const AppHeader = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          <div style={{ display: "flex", alignItems: "center" }}>
            <Profile />
          </div>
        </div>
      </Header>
    </>
  );
};

export default AppHeader;
