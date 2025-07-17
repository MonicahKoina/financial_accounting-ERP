import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router";

import Dashboard from "../pages/Dashboard";
import AddStock from "../pages/inventoryManagement/AddStock";
import StockList from "../pages/inventoryManagement/StockList";
import StockLayout from "../layout/StockLayout";
import SellGoods from "../pages/SellGoods";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StockLayout />}>
        <Route index element={<SellGoods />} />
        {/* <Route index element={<Dashboard />} /> */}
        <Route path="add-stock" element={<AddStock />} />
        <Route path="stock-list" element={<StockList />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
