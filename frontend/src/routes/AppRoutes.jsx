import React from "react";
import { Route, Routes } from "react-router";
import GoodsReceived from "../pages/inventoryManagement/GoodsReceived";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GoodsReceived />}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
