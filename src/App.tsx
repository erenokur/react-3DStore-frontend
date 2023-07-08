import React from "react";
import ReactDOM from "react-dom";
import Routes from "src/routes";
import store from "src/context/reduxStore";
import { Provider } from "react-redux";
import { AuthProvider } from "src/context/AuthContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./context/i18next";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <AuthProvider>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </I18nextProvider>
  </AuthProvider>,
  document.getElementById("root")
);
