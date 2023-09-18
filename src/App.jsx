import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { test_contexts } from './Conext'


function App() {
  const test=useContext(test_contexts)

  return (
    <>
    
    <h1>{test}</h1>

    
    </>
  )
}

export default App
