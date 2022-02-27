import React from 'react'
import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import Units from './pages/Units'
import Home from './pages/Home'
import UnitDetail from './pages/UnitDetail'
import Header from './components/Header'
import { useSelector } from 'react-redux'

function App () {
  const location = useLocation()
  const title = useSelector((state) => state.title)
  return (
    <div className="App">
      <Header pageTitle={title} selectedPath={location.pathname}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="units" element={<Units />} />
        <Route path="unit-detail/:id" element={<UnitDetail />} />
      </Routes>
    </div>
  )
}

export default App
