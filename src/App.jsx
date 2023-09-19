import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./css/App.css";
import { useContext } from "react";
import { test_contexts } from "./Context";
import Layout from "./components/layout";
import Home from "./Pages/Home";
import Hero from "./components/Hero";
import About from "./Pages/About";
import Sidebar from "./components/Sidebar";

function App() {
  const test = useContext(test_contexts);

  return (
    <>
       
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="About" element={<About />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
