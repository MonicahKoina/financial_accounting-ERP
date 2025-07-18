import React from "react";
import { Layout, Menu, Breadcrumb, theme } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router";

const { Header, Content, Footer } = Layout;

const navItems = [
  { key: "/", label: "Sell Goods" },
  { key: "add-stock", label: "Add Stock" },
  { key: "stock-list", label: "Stock List" },
  { key: "sales-journal", label: "Sales Journal" },
];

const StockLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="text-white font-bold text-xl mr-8">BizPilot</div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[
            location.pathname === "/" ? "/" : location.pathname.slice(1),
          ]}
          items={navItems}
          onClick={(e) => navigate(`/${e.key === "/" ? "" : e.key}`)}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>

      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }} items={[{ title: "Home" }]} />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        BizPilot ©{new Date().getFullYear()} Built by Monmon
      </Footer>
    </Layout>
  );
};

export default StockLayout;
