
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'aos/dist/aos.css';

import './index.css';

import Navbar from './components/Navbar';
import Homepage from './Homepages/Homepage';
import About from './Pages/About';
import Sustainability from './Pages/Sustainability';
import CareerSection from './Pages/CareerSection';
import ContactForm from './Pages/ContactUs'
import PumpsPage from './components/PumpsPage';
import Drains from './components/Drains';
import PumpDetailsPage from "./components/PumpDetailsPage";
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 👇 Full height layout wrapper */}
      <div className="d-flex flex-column min-vh-100">

        {/* Navbar always on top */}
        <Navbar />

        {/* 👇 Main content grows to fill space */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<CareerSection />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/manufacturing/pumps" element={<PumpsPage />} />
            <Route path="/manufacturing/drains" element={<Drains />} />
            
            <Route path="/manufacturing/pumps/:pumpId" element={<PumpDetailsPage />} />
          </Routes>
        </main>

        {/* Footer always sticks to the bottom if content is short */}
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
