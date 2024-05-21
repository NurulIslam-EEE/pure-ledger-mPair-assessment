"use client";
import React from "react";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

import SideMenu from "./SideMenu";

function DashboardSidebar({ children }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ background: "rgba(228, 242, 248, 1)" }}>
      <Sider
        breakpoint="lg"
        style={{
          width: "275px",
          background: "rgba(228, 242, 248, 1)",
          minHeight: "100vh",
        }}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />

        <h3 className="text-center text-3xl text-700 my-4">Accounting</h3>
        {/* <Menu
      style={{
        background: "rgba(228, 242, 248, 1)",
      }}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={items}
    /> */}
        <SideMenu />
      </Sider>
      <Layout style={{ background: "white" }}>
        <Content
          style={{
            margin: "24px 62px 0",
            background: "white",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,

              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardSidebar;
