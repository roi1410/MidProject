import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainContext from "./Context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContext>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </MainContext>
  </React.StrictMode>
);
