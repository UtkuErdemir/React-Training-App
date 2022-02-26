import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Units from './pages/Units'
import Home from './pages/Home'
import UnitDetail from './pages/UnitDetail'

function App () {
  return (
    <div className="App">
      <h2>React App</h2>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="units" element={<Units />} />
        <Route path="unit-detail" element={<UnitDetail />} />
      </Routes>
    </div>
  )
}

export default App
