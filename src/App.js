import React from 'react'
import Header from "./components/Header/Header";
import About from './components/About/About';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
    <SpeedInsights />
    <Header />
    <About />
    </>
    
  );
}

export default App;
