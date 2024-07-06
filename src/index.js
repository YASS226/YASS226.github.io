import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Sections/Contact';
import ServiceInfo from './Pages/Sections/ServiceInfo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/serviceinfo/:category" element={<ServiceInfo />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
);



