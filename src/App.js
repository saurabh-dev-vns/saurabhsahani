import React from 'react'
import Header from "./components/Header/Header";
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';
function App() {
  return (
    <>
    <SpeedInsights />
    <Header />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    </>
    
  );
}

export default App;
