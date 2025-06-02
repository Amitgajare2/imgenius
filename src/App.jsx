import React from 'react'
import Home from './pages/Home'
import './App.css'
import './Mobile.css'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from './pages/About';
import Policy from './pages/Policy';
import Gallery from './pages/Gallery';
import UploadDetails from './pages/UploadDetails';
import AdminLogin from './pages/AdminLogin';


function App() {

  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/upload" element={<UploadDetails />} />

        <Route path="*" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </AnimatePresence>
  );
}

export default App