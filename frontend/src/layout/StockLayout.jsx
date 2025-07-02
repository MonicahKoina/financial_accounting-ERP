import React, { useState } from "react";
import { Tabs } from "antd";
import AddStock from "../pages/inventoryManagement/AddStock";
import Ledger from "../pages/inventoryManagement/Ledger";
import StockList from "../pages/inventoryManagement/StockList";

const StockLayout = () => {
  const [activeTab, setActiveTab] = useState("add");

  const onChange = (key) => {
    setActiveTab(key);
    console.log("Switched to tab:", key);
  };

  const items = [
    {
      label: "Add Stock",
      key: "add",
      children: <AddStock />,
    },
    {
      label: "Stock List",
      key: "list",
      children: <StockList />,
    },
    {
      label: "Ledger",
      key: "ledger",
      children: <Ledger />,
    },
  ];

  return (
    <Tabs type="card" activeKey={activeTab} onChange={onChange} items={items} />
  );
};

export default StockLayout;
