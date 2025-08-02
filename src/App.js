// 📁 frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Admin from './pages/Admin';

function App() {
  return (
     <Router>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-blue-600">Intern Portal</div>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-blue-600 transition-colors">Register</Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-blue-600 transition-colors">Admin</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-6 bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;