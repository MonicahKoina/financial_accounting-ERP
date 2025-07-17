import React from "react";
import { Layout, Menu, Breadcrumb, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const navItems = [
  { key: "add-stock", label: "Add Stock" },
  { key: "stock-list", label: "Stock List" },
  { key: "sell-goods", label: "Sell Goods" },
  { key: "sales-journal", label: "Sales Journal" },
  { key: "purchases-ledger", label: "Purchases Ledger" },
  { key: "reconciliation", label: "Reconciliation" },
];

const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="text-white font-bold text-xl mr-8">✈️ BizPilot</div>{" "}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["dashboard"]}
          items={navItems}
          onClick={handleMenuClick}
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
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        BizPilot ©{new Date().getFullYear()} Built by Monmon
      </Footer>
    </Layout>
  );
};

export default AppLayout;
