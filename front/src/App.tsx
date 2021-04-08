import "./assets/styles/elevation.css";
import "./assets/styles/main.css";
import { browserHistory } from "./browserHistory";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { Routes } from "./pages/Routes";
import React from "react";

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
