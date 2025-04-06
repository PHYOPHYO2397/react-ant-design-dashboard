import React from "react";
import {
  DashboardOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location.pathname);
  function onClick(e) {
    navigate(e.key);
  }
  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          onClick={onClick}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={[
            {
              key: "/",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "/users",
              icon: <UsergroupAddOutlined />,
              label: "Users",
            },
          ]}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
