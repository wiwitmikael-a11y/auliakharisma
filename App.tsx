import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import { Portfolio } from './components/Portfolio';
import Certifications from './components/Certifications';
import Stats from './components/Stats';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Certifications />
        <Stats />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;