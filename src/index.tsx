// THIRD IMPORT
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// PROJECT IMPORT
import App from "App";
import { store } from "app/store";
import reportWebVitals from "reportWebVitals";
import * as serviceWorker from "serviceWorker";
import { ConfigProvider } from "contexts/ConfigContext";
import { BASE_PATH } from "config";

// STLYES IMPORT
import "assets/scss/globalStyle.scss";
import "assets/scss/style.scss";
import "react-notifications/lib/notifications.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ConfigProvider>
      <BrowserRouter basename={BASE_PATH}>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
reportWebVitals();
