// THRID IMPORT
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PROJECT IMPORT
import LoginRoutes from "routes/LoginRoutes";
import Login from "pages/Login";

// TYPE IMPROT

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
