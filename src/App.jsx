import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';

const Benefits = lazy(() => import('./Components/Benefits/Benefits'));
const Features = lazy(() => import('./Components/Features/Features'));
const Testimonials = lazy(() => import('./Components/Testimonials/Testimonials'));
const Pricing = lazy(() => import('./Components/Pricing/Pricing'));
const Footer = lazy(() => import('./Components/Footer/Footer'));

function App() {
  return (
    <div className=''>
      <Header />
      <HeroSection />
      <div className='bg-[#252161] flex flex-col'>
        <Suspense fallback={<div>Loading...</div>}>
          <Features />
          <Benefits />
          <Testimonials />
          <Pricing />
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}

export default App;