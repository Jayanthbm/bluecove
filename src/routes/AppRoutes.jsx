import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import Gallery from '../pages/Gallery';
import Amenities from '../pages/Amenities';
import About from '../pages/About';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/amenities" element={<Amenities />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
