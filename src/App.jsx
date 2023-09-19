import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import './css/App.css'
import { useContext } from 'react'
import { test_contexts } from './Context'
import Layout from './components/layout'
import Home from './Pages/Home'


function App() {
  const test = useContext(test_contexts);

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
    
      </Route>


    </Routes>

    
    </>
  );
}

export default App;
