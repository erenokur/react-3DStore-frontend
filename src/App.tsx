import React from "react";
import Routes from "src/routes";
import store from "src/context/reduxStore";
import { Provider } from "react-redux";
import { AuthProvider } from "src/context/AuthContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./context/i18next";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <Routes />
          </Provider>
        </I18nextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
