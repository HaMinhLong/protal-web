// THRID IMPORT
import React from "react";
import { Routes, Route } from "react-router-dom";

// PROJECT IMPORT
import Account from "pages/Account";
import Dashboard from "pages/Dashboard";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
