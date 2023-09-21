import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./css/App.css";
import { useContext } from "react";
import Layout from "./components/layout";
import Home from "./Pages/Home";
import { Register } from "./Pages/Register";
import { Semester_sing_in } from "./Pages/Semester_sing_in";
import Sidebar from "./components/Sidebar";
import  LogIn  from "./Pages/LogIn";
import DegreePage from "./Pages/DegreePage";

function App() {
 
console.log();
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/degree/:degree" element={<DegreePage />} />
          <Route path="/Register" element={<Register />} />
          {/* change the path to Semester_sing_in */}
          <Route path="/payment" element={<Semester_sing_in />} />
          <Route path="/LogIn" element={<LogIn/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
