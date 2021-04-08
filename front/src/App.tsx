import "./assets/styles/elevation.css";
import "./assets/styles/main.css";
import { browserHistory } from "./browserHistory";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { Routes } from "./pages/Routes";
import { persistor, store } from "./store";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";

interface Props {}

export const App: React.FC<Props> = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);
