import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./pages/Routes";
import "./assets/styles/main.css";
import "./assets/styles/elevation.css";

interface Props {}

export const App: React.FC<Props> = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
