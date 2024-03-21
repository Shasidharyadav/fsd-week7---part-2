import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DestinationsSection from './components/DestinationsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;