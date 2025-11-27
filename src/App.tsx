import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900 selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;