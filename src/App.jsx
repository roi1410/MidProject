import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./css/App.css";
import { useContext } from "react";
import Layout from "./components/layout";
import Home from "./Pages/Home";
import DegreePage from "./components/DegreePage";
import { Register } from "./Pages/Register";
import { Payment } from "./Pages/Payment";
import Sidebar from "./components/Sidebar";

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/degree/:degree" element={<DegreePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
