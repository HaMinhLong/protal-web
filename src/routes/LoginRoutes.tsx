// THRID IMPORT
import React from "react";
import { Routes, Route } from "react-router-dom";

// PROJECT IMPORT
import Login from "pages/Login";

const LoginRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default LoginRoutes;
