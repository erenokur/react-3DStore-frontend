import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import store from "./store";
import { fetchUserData } from "./store/authSlices/authThunk";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { getToken } from "./utils/tokenStorage";
import history from "src/context/routerHistory";
import "./index.css";
if (getToken()) {
  store.dispatch(fetchUserData());
}

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Router>,
  document.getElementById("root")
);
