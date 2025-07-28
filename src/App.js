import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Internships from './components/Internships';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Internships />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
