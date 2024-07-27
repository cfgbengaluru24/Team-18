import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css';
import Login from './pages/login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>      
    </Router>
  );
}
