import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./css/App.css";
import { useContext } from "react";
import Layout from "./components/layout";
import Home from "./Pages/Home";
import { Register } from "./Pages/Register";
import { Payment } from "./Pages/Payment";
import Sidebar from "./components/Sidebar";
import  LogIn  from "./Pages/LogIn";
import DegreePage from "./Pages/DegreePage";

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/degree/:degree" element={<DegreePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/LogIn" element={<LogIn/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
