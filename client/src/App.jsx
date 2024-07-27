import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/:id" element={<Dashboard />} />
        console.log('app');
      </Routes>
    </Router>
  );
}

export default App;
