import React from "react";
import { Route, Routes } from "react-router";
import StockLayout from "../layout/StockLayout";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StockLayout />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
