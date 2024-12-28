import React from 'react';
import Navbar from '../components/Navbar';
import SwiperSlider from '../components/SwiperSlider';
import CounterSection from '../components/CounterSection';
import './landing.css';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <SwiperSlider />
      <CounterSection />
      {/* Additional Sections like About, Menu, etc., can go here */}
    </>
  );
};

export default LandingPage;
