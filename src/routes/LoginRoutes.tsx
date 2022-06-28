// THRID IMPORT
import React from "react";
import { Route } from "react-router-dom";

// PROJECT IMPORT
import Login from "pages/Login";

const LoginRoutes = () => {
  return (
    <>
      <Route path="/login" element={<Login />} />
    </>
  );
};

export default LoginRoutes;
