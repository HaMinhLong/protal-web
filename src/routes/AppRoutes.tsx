// THRID IMPORT
import React from "react";
import { Routes, Route } from "react-router-dom";

// PROJECT IMPORT
import Layout from "layouts";
import Account from "pages/Account";
import Dashboard from "pages/Dashboard";
import MainLayout from "layouts/MainLayout";

const AppRoutes = () => {
  return (
    // <Layout>
    //   <Routes>
    //     <Route path="/" element={<Dashboard />} />
    //     <Route path="/account" element={<Account />} />
    //   </Routes>
    // </Layout>
    <MainLayout />
  );
};

export default AppRoutes;
