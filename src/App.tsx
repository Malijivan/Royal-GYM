/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';

// Pages
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Membership from './components/Membership';
import WorkoutAI from './components/WorkoutAI';
import DietAI from './components/DietAI';
import BMI from './components/BMI';
import Shop from './components/Shop';
import Contact from './components/Contact';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={() => setIsLoggedIn(true)} />} 
        />
        
        {/* Protected Routes inside Layout */}
        <Route 
          path="/" 
          element={isLoggedIn ? <Layout onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" />}
        >
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="membership" element={<Membership />} />
          <Route path="workout" element={<WorkoutAI />} />
          <Route path="diet" element={<DietAI />} />
          <Route path="bmi" element={<BMI />} />
          <Route path="protein-shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
