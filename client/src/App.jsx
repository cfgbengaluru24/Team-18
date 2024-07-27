import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Calendar from './pages/calendar'
import Navbar from './components/navbar'
import Eachcamp from './pages/eachcamp'
import CampDetail from './components/CampDetail'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/camps" element={<Eachcamp />} />
        <Route path="/camps/:id" element={<CampDetail />} />
      </Routes>
    </Router>
  )
}