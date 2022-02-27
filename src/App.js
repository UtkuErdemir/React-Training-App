import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Units from './pages/Units'
import Home from './pages/Home'
import UnitDetail from './pages/UnitDetail'
import Header from './components/Header'

function App () {
  return (
    <div className="App">
      <Header pageTitle='Uygulama' selectedPath={'/'}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="units" element={<Units />} />
        <Route path="unit-detail/:id" element={<UnitDetail />} />
      </Routes>
    </div>
  )
}

export default App
