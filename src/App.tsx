// THRID IMPORT
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

// PROJECT IMPORT
import AppRoutes from "routes/AppRoutes";
import LoginRoutes from "routes/LoginRoutes";

// TYPE IMPROT
import ThemeCustomization from "themes";
import NavigationScroll from "layouts/NavigationScroll";
import RTLLayout from "components/RTLLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeCustomization>
          <RTLLayout>
            <CssBaseline />
            <NavigationScroll>
              {1 ? <AppRoutes /> : <LoginRoutes />}
            </NavigationScroll>
          </RTLLayout>
        </ThemeCustomization>
      </BrowserRouter>
    </>
  );
};

export default App;
