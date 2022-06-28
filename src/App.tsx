// THRID IMPORT
import React from "react";
import { BrowserRouter } from "react-router-dom";

// PROJECT IMPORT
import AppRoutes from "routes/AppRoutes";
import LoginRoutes from "routes/LoginRoutes";

// TYPE IMPROT

const App = () => {
  return (
    <>
      <BrowserRouter>{1 ? <AppRoutes /> : <LoginRoutes />}</BrowserRouter>
    </>
  );
};

export default App;
