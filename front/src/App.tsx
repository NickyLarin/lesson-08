import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./pages/Routes";
import { Provider } from "react-redux";
import { store } from "./store";
import "./assets/styles/main.css";
import "./assets/styles/elevation.css";

interface Props {}

export const App: React.FC<Props> = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);
