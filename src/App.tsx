import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import InquiryForm from './components/InquiryForm';
import ServiceSelection from './components/ServiceSelection';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n';
import { FormProvider, useFormContext } from './FormContext';

function AppContent() {
  const { currentStep } = useFormContext();

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900 selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        {currentStep === 'inquiry' ? (
          <>
            <Hero />
            <ServicesSection />
            <InquiryForm />
          </>
        ) : (
          <ServiceSelection />
        )}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <FormProvider>
        <AppContent />
      </FormProvider>
    </LanguageProvider>
  );
}

export default App;