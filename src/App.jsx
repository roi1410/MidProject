import { useState } from 'react'
import { Route ,Routes,  } from 'react-router-dom'

import './css/App.css'
import { useContext } from 'react'
import { test_contexts } from './Context'
import Layout from './components/layout'
import Home from './Pages/Home'
import DegreePage from './components/DegreePage'
import { Register } from './Pages/Register'
import { Payment } from './Pages/Payment'


function App() {
  const test=useContext(test_contexts)

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
    <Route path='/degree/:degree' element={<DegreePage />} />
    <Route path='/Register' element={<Register />} />
    <Route path='/payment' element={<Payment />} />
      </Route>


    </Routes>

    
    </>
  )
}

export default App
