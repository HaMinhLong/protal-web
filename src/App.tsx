// THIRD IMPORT
import React from 'react';
import { CssBaseline } from '@mui/material';

// PROJECT IMPORT
import Routes from 'routes';
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
import Snackbar from 'components/Extended/Snackbar';

// TYPE IMPROT
import ThemeCustomization from 'themes';
import NavigationScroll from 'layouts/NavigationScroll';
// import RTLLayout from "components/RTLLayout";
import { NotificationContainer } from 'react-notifications';

const App = () => {
  return (
    <>
      <ThemeCustomization>
        <CssBaseline />
        <NotificationContainer />
        <NavigationScroll>
          <AuthProvider>
            <>
              <Routes />
              <Snackbar />
            </>
          </AuthProvider>
        </NavigationScroll>
      </ThemeCustomization>
    </>
  );
};

export default App;
