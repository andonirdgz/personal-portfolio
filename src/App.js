import Home from "./components/pages/home/Home"
import { Routes, Route } from "react-router"
import React from "react"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Home />} />
      <Route path='/work' element={<Home />} />
      <Route path='/contact' element={<Home />} />
    </Routes>
  )
}

export default App
